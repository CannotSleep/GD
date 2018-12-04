using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Temp.Web.Framework.Core;

namespace Temp.Web.Framework.Filters
{
    /// <summary>
    /// LoginAuthorizeAttribute 的摘要说明
    /// </summary>
    public class LoginAuthorizeAttribute : AuthorizeAttribute
    {
        //tido
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            if (SessionManager.GetAccountInfo() == null)
            {
                return false;
            }
            return true;
        }

        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            filterContext.Result = filterContext.HttpContext.Request.UrlReferrer == null ?
                new RedirectResult("/Account/Login") :
                new RedirectResult("/Error/Detail?ErrorNo=" + ErrorTypeEnum.LostSession);
        }
    }
}
