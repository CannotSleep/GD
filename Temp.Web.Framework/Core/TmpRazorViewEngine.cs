using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Temp.Web.Framework.Core
{
    /// <summary>
    /// 自定义的Razor引擎，为了在mvc中使用多级目录
    /// </summary>
    public class TmpRazorViewEngine : RazorViewEngine
    {
        public TmpRazorViewEngine()
        {
            ViewLocationFormats = new[]
            {
                "~/Views/{1}/{0}.cshtml",
                 "~/Views/Tmp/{1}/{0}.cshtml",
                "~/Views/Shared/{0}.cshtml"

            };

            PartialViewLocationFormats = new[]
            {
                "~/Views/{1}/{0}.cshtml",
                "~/Views/Tmp/{1}/{0}.cshtml",
                "~/Views/Shared/{0}.cshtml"
            };
        }
    }
}
