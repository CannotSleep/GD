using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Temp.Web.Framework.Filters
{
    /// <summary>
    /// CacheActionFilterAttribute 的摘要说明
    /// </summary>
    public class WebCacheAttribute : ActionFilterAttribute
    {

        public WebCacheAttribute()
        {
        }


        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            filterContext.HttpContext.Response.AppendHeader("Cache-Control", "public,must-revalidate, proxy-revalidate, max-age=2592000");
        }
    }
}
