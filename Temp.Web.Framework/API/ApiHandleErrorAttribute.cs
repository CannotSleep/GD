using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Http.Filters;
using System.Threading.Tasks;
using Temp.Core.Dependency;
using Temp.Service;
using Temp.Service.Common;
using Temp.Data.Entity;
using Tmp.Service;

namespace Temp.Web.Framework.API
{
    [AttributeUsage(AttributeTargets.Class,Inherited =true,AllowMultiple =false)]
    ///<summary>
    ///ApiHandleErrorAttribute 用于处理并记录系统错误
    ///<summary>
    public class ApiHandleErrorAttribute:ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            var bllErrorInfo = IocObjectManager.GetInstance().Resolve<IErrorInfoService>();
            var errorInfo = new ErrorInfo();

            errorInfo.UID = "";
            errorInfo.RunningTime = DateTime.Now;
            errorInfo.ErrorMsg = actionExecutedContext.Exception.Message;
            errorInfo.ErrorCode = 0;
            errorInfo.ProgramID = "0";
            errorInfo.Url = HttpContext.Current.Request.Url.ToString();
            errorInfo.StackTrace = actionExecutedContext.Exception.StackTrace;
            errorInfo.SolveBy = "";

            bllErrorInfo.Add(errorInfo);
            HttpContext.Current.Response.Redirect("/api/ErrorApi/Detail");
        }


    }
}
