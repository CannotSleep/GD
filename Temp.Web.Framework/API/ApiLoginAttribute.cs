using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Net.Http;
using System.Net;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using System.Web.Http.Results;
using Temp.Core.Dependency;
using Temp.Service.Common;
using Temp.Service.Security;
using Temp.Web.Framework.Core;
using Temp.Web.Framework.Models;
using Temp.Data.Entity;

namespace Temp.Web.Framework.API
{
    /// <summary>
    /// todo
    /// </summary>
    public class ApiLoginAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            var _userLoginTokenService = IocObjectManager.GetInstance().Resolve<IUserLoginTokenService>();
            var _userLoginService = IocObjectManager.GetInstance().Resolve<IUserLoginService>();
            var _logService = IocObjectManager.GetInstance().Resolve<ILogService>();

            HttpRequest Request = HttpContext.Current.Request;
            string HttpMethod = HttpContext.Current.Request.HttpMethod;

            string token = "";

            if (HttpMethod.ToLower() == "post")
            {
                token = Request.Form["token"] == null ? "" : Request.Form["token"];
                token = HttpUtility.UrlDecode(token);
            }
            else {
                token = Request.QueryString["token"] == null ? "" : Request.QueryString["token"];
            }

            token = HttpUtility.UrlDecode(Request.Headers.Get("Token"));

            if (string.IsNullOrWhiteSpace(token))
            {
                //_logService.Add(new Log {Operate = "CheckToken",Data = "url:" + Request.Url + "//token:" + Request.Headers["Token"]})
                Message msg = new Message { message = "服务器出错", status = (int)MessageStatus.fail };
                actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.OK, msg);
            }
            else {
                var userlogintoken = _userLoginTokenService.GetModel(a=>a.TokenID==token);
                if (userlogintoken != null)
                {
                    UserLogin userlogin = _userLoginService.GetModel(a=>a.AccountID == userlogintoken.AccountID && a.AppID == (int)LoginDevice.app);

                    if (userlogin!=-null) {
                        if (userlogin.Token!=userlogintoken.Token) {
                            Message msg = new Message { message = "登陆超时，请重新登陆", status = (int)MessageStatus.tokenfail };
                            actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.OK,msg);
                        }
                    }

                }
                else {
                    Message msg = new Message { message = "登陆超时，请重新登陆", status = (int)MessageStatus.tokenfail };
                    actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.OK, msg);
                }
            }
            base.OnActionExecuting(actionContext);
        }


    }
}
