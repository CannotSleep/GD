using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Temp.Core.Dependency;
using Temp.Core.Security;
using Temp.Data.Entity;
using Temp.Service.Common;

namespace Temp.Web.Framework.API
{
    [ApiHandleError]
    public class DefaultApiController:ApiController
    {
        [NonAction]
        public string Form(string name) {
            return HttpContext.Current.Request.Form[name] == null ? "" : HttpContext.Current.Request.Form[name];
        }

        [NonAction]
        public string Query(string name) {
            return HttpContext.Current.Request.QueryString[name] == null ? "" : HttpContext.Current.Request.QueryString[name];
        }

        /// <summary>
        /// 返回前端加密数据
        /// </summary>
        /// <param name="Text"></param>
        /// <returns></returns>
        [NonAction]
        public string Encrypt(string Text) {
            return AESS.Encrypt(Text).Replace("+","$").Replace("/","!").Replace("%","-");
        }

        /// <summary>
        /// 解密前端加密的数据
        /// </summary>
        /// <returns></returns>
        [NonAction]
        public string Decrypt(string Text) {
            return AESS.Decrypt(Text.Replace("$","+").Replace("!","/").Replace("-","%"));
        }

        /// <summary>
        /// 获取当前请求的token,获取不成功返回空值
        /// </summary>
        public string CurrentToken
        {
            get
            {
                var header = HttpContext.Current.Request.Headers;
                string token = "";
                token = header.Get("Token");
                return HttpUtility.UrlDecode(token);
            }
        }

        /// <summary>
        /// 获取当前请求的JsonBody
        /// </summary>
        public string JsonString
        {
            get
            {
                Stream s = HttpContext.Current.Request.InputStream;
                StreamReader reader = new StreamReader(s);
                return reader.ReadToEnd();
            }
        }


        /// <summary>
        /// 记录相关操作日志
        /// </summary>
        /// <param name="operate">操作说明</param>
        /// <param name="data">数据</param>
        public void Log(string operate,string data) {
            var logService = IocObjectManager.GetInstance().Resolve<ILogService>();
            var model = new Log();
            model.Operate = operate;
            model.Data = data;
            logService.UseRepository.Insert(model);
        }
    }
}
