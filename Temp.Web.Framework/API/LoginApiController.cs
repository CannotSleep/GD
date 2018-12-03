using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;
using Temp.Core.Dependency;
using Temp.Core.Security;
using Temp.Data.Entity;
using Temp.Service.Security;
using Temp.Web.Framework.Models;

namespace Temp.Web.Framework.API
{
    public class LoginApiController : BaseApiController
    {
        private IAccountService _accountService = IocObjectManager.GetInstance().Resolve<IAccountService>();
        private IUserLoginTokenService _userLoginTokenService = IocObjectManager.GetInstance().Resolve<IUserLoginTokenService>();
        private IUserLoginService _userLoginService = IocObjectManager.GetInstance().Resolve<IUserLoginService>();
        private IMenuService _menuService = IocObjectManager.GetInstance().Resolve<IMenuService>();

        public JsonResult<Message> Login() {

            HttpContext context = HttpContext.Current;
            Message message = new Message();
            Account account = new Account();
            account = HttpRequestHelper.ConvertJsonTomodel<Account>(context);

            if (string.IsNullOrWhiteSpace(account.AccountID)) {
                message.message = "用户名不能为空";
                message.status = (int)MessageStatus.fail;
                return Json(message);
            }

            if (string.IsNullOrWhiteSpace(account.Password))
            {
                message.message = "密码不能为空";
                message.status = (int)MessageStatus.fail;
                return Json(message);
            }

            string realPassword = AESS.Encrypt(account.Password);
            var info = _accountService.GetModel(a => a.AccountID == account.AccountID && a.Password == realPassword && a.IsUse == true);
            if (info == null) {
                message.message = "账号或者密码不正确";
                message.status = (int)MessageStatus.fail;
                return Json(message);
            }
            var user = _accountService.GetAccountInfo(info.ID);
            if (user != null) {
                UserLoginToken userLoginToken = new UserLoginToken();
                userLoginToken.ID = Guid.NewGuid();
                userLoginToken.LoginTime = DateTime.Now;
                userLoginToken.LoginIP = IPNet.GetIP4Address();
                userLoginToken.LoginDevice = (int)LoginDevice.app;
                userLoginToken.AccountID = user.ID;
                userLoginToken.Token = AESS.createToken();
                userLoginToken.TokenID = AESS.Encrypt(userLoginToken.ID.ToString("D"));
                _userLoginTokenService.Add(userLoginToken);

                var userLogin = _userLoginService.GetModels(a => a.AccountID == user.ID && a.AppID == (int)LoginDevice.app);

                if (userLogin.Count > 0)
                {
                    userLogin.First().Token = userLoginToken.Token;
                    _userLoginService.Update(userLogin.First());
                }
                else {
                    UserLogin model = new UserLogin();
                    model.AccountID = user.ID;
                    model.Token = userLoginToken.Token;
                    model.AppID = (int)LoginDevice.app;
                    _userLoginService.Add(model);
                }
                message.message = "登陆成功";
                message.status = (int)MessageStatus.success;
                message.data = user;
                message.token = HttpUtility.UrlEncode($"{userLoginToken.TokenID}");
            }
            return Json(message);
        }


        [ApiLogin]
        [Route("api/LoginApi/GetAuthority")]
        [HttpPost]
        public JsonResult<Message> GetAuthority() {
            Message message = new Message();
            var data = _menuService.GetListForAppByDepartmentIDAndRole(User.DepartmentID, _RolesInfo);
            message.status = 1;
            message.message = "数据获取成功";
            message.data = data;
            return Json(message);
        }


        /// <summary>
        /// 获取用户信息
        /// </summary>
        /// <returns></returns>
        [ApiLogin]
        [Route("api/LoginApi/GetAccountInfo")]
        [HttpGet]
        public JsonResult<Message> GetAccountInfo() {
            Message message = new Message();
            try {
                message.status = (int)MessageStatus.success;
                message.data = User;
            }
            catch (Exception ex) {
                message.status = (int)MessageStatus.fail;
                message.data = ex.Message;
            }
            return Json(message);
        }


        /// <summary>
        /// 获取头像
        /// </summary>
        /// <returns></returns>
        [ApiLogin]
        [Route("api/LoginApi/GetImg")]
        [HttpGet]
        public HttpResponseMessage GetImg() {

            string filepatch = HttpContext.Current.Server.MapPath("/Images/logo.png");
            using (FileStream file = new FileStream(filepatch,FileMode.Open,FileAccess.Read)) {
                byte[] buff = new byte[file.Length];
                file.Read(buff,0,(int)file.Length);
                MemoryStream ms = new MemoryStream(buff);
                HttpResponseMessage res = new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StreamContent(ms)
                };
                res.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("image/jpeg");
                return res;
            }

        }

    }
}
