using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Temp.Web.Framework.Core
{
    /// <summary>
    /// Cookie控制表
    /// </summary>
    [Serializable()]
    public partial class CookieManager
    {
        private const string Version = "v";

        private CookieManager() { }

        public static void SetCookie(string name, string value, int time = 0, bool onlyread = true)
        {
            HttpCookie Cookie = new HttpCookie(name);
            if (time != 0)
                Cookie.Expires = DateTime.Now.AddDays(time);
            Cookie.Value = value;
            Cookie.HttpOnly = onlyread;
            System.Web.HttpContext.Current.Response.Cookies.Add(Cookie);
        }
        public static string GetCookie(string name)
        {
            HttpCookieCollection Cookie = HttpContext.Current.Request.Cookies;
            if (Cookie[name] != null)
                return Cookie[name].Value;
            return "";
        }
        public static void DeleteCookie(string name)
        {
            HttpCookie Cookie = new HttpCookie(name);
            Cookie.Expires = DateTime.Now.AddDays(-1);
            HttpContext.Current.Response.SetCookie(Cookie);
        }


        /// <summary>
        /// 添加Version
        /// </summary>
        /// <param name="ver"></param>
        /// <remarks></remarks>
        public static void AddVersion(string ver)
        {
            HttpCookie cookie = HttpContext.Current.Request.Cookies["Version"];
            if ((cookie == null))
            {
                cookie = new HttpCookie("Version");
                cookie.Values.Add(Version, ver);
                cookie.Expires = DateTime.Now.AddDays(30);
                HttpContext.Current.Response.AppendCookie(cookie);
            }
            else
            {
                HttpContext.Current.Response.Cookies["Version"].Values[Version] = ver;
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <remarks></remarks>
        public static void RemoveVersion()
        {
            HttpCookie cookie = HttpContext.Current.Request.Cookies["Version"];
            if ((cookie != null))
            {
                HttpContext.Current.Response.Cookies.Remove(Version);
            }
        }
        /// <summary>
        /// 得到Version
        /// </summary>
        /// <returns></returns>
        /// <remarks></remarks>
        public static string GetVersion()
        {
            HttpCookie cookie = HttpContext.Current.Request.Cookies["Version"];
            if ((cookie == null))
            {
                cookie = new HttpCookie("Version");
            }
            return cookie.Values[Version];
        }
    }
}