using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Temp.Core.Caching;
using Temp.Core.Dependency;
using Temp.Data.Entity;
using Temp.Service.Dto;

namespace Temp.Web.Framework.Core
{
    /// <summary>
    /// Session细化项，用于确定哪些session需要清理
    /// </summary>
    /// <remarks></remarks>
    public partial class SessionItem
    {
        public string SessionKey;
        public bool ClearWhenLogout;
    }


    /// <summary>
    /// Session控制表
    /// </summary>
    [Serializable()]
    public partial class SessionManager
    {
        private const string AccountInfo = "AccountInfo";
        private const string RolesInfo = "RolesInfo";

        /// <summary>
        /// Session集合，方便后面扩充 
        /// </summary>
        /// <remarks></remarks>

        private static HashSet<SessionItem> SessionItems = new HashSet<SessionItem>();
        /// <summary>
        /// 添加Session项到集合， 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="item"></param>
        /// <param name="value"></param>
        /// <remarks></remarks>
        public static void AddSessionItem<T>(SessionItem item, T value)
        {
            SessionItems.Add(item);
            HttpContext context = HttpContext.Current;
            if ((context != null) & (context.Session != null))
            {
                context.Session[item.SessionKey] = value;
            }
        }

        public static T GetSessionItem<T>(string key)
        {
            var _cardInfoItem = new SessionItem();
            _cardInfoItem.SessionKey = key;
            HttpContext context = HttpContext.Current;
            if ((context != null) & (context.Session != null))
            {
                return (T)context.Session[_cardInfoItem.SessionKey];
            }
            return default(T);
        }

        /// <summary>
        /// 添加Session
        /// </summary>
        /// <param name="name"></param>
        /// <param name="value"></param>
        /// <remarks></remarks>
        public static void AddSession(string name, string value)
        {
            if (name == null)
            {
                throw new ArgumentException("参数不能为NULL");
            }
            HttpContext context = HttpContext.Current;
            if ((context != null) & (context.Session != null))
            {
                context.Session[name] = value;
            }
        }
        /// <summary>
        /// 删除Session
        /// </summary>
        /// <remarks></remarks>
        public static void RemoveSession(string name)
        {
            HttpContext context = HttpContext.Current;
            if ((context != null) & (context.Session != null))
            {
                context.Session.Remove(name);
            }
        }

        /// <summary>
        /// 得到Session
        /// </summary>
        /// <returns></returns>
        /// <remarks></remarks>
        public static string GetSession(string name)
        {
            HttpContext context = HttpContext.Current;
            if ((context != null) & (context.Session != null))
            {
                return (string)context.Session[name];
            }
            return null;
        }


        /// <summary>
        /// 登出登陆处理需要清理的Session
        /// </summary>
        /// <remarks></remarks>
        public static void Logout()
        {
            foreach (var item in SessionItems)
            {
                if (item.ClearWhenLogout)
                {
                    HttpContext context = HttpContext.Current;
                    if ((context != null) & (context.Session != null))
                    {
                        context.Session.Remove(item.SessionKey);
                    }
                }
            }
            //清空Session 
            IocObjectManager.GetInstance().Resolve<IHttpContextSessionManager>().Clear();
        }


        /// <summary>
        /// 添加RolesInfo
        /// </summary>
        /// <param name="model"></param>
        /// <remarks></remarks>
        public static void AddRolesInfo(List<AccountOfRole> model)
        {
            if (model == null)
            {
                throw new ArgumentException("参数不能为NULL");
            }
            HttpContext context = HttpContext.Current;
            if ((context != null) & (context.Session != null))
            {
                context.Session[RolesInfo] = model;
            }
        }
        /// <summary>
        /// 删除RolesInfo
        /// </summary>
        /// <remarks></remarks>
        public static void RemoveRolesInfo()
        {
            HttpContext context = HttpContext.Current;
            if ((context != null) & (context.Session != null))
            {
                context.Session.Remove(RolesInfo);
            }
        }
        /// <summary>
        /// 得到RolesInfo
        /// </summary>
        /// <returns></returns>
        /// <remarks></remarks>
        public static List<AccountOfRole> GetRolesInfo()
        {
            HttpContext context = HttpContext.Current;
            if ((context != null) & (context.Session != null))
            {
                return (List<AccountOfRole>)context.Session[RolesInfo];
            }
            return null;
        }


        /// <summary>
        /// 添加Domain
        /// </summary>
        /// <param name="domain"></param>
        public static void AddDomain(int domain) {
            HttpContext context = HttpContext.Current;
            if ((context != null)&(context.Session!=null)) {
                context.Session["Domain"] = domain;
            }
        }

        /// <summary>
        /// 删除Domain
        /// </summary>
        /// <remarks></remarks>
        public static void RemoveDomain()
        {
            HttpContext context = HttpContext.Current;
            if ((context != null) & (context.Session != null))
            {
                context.Session.Remove("Domain");
            }
        }
        /// <summary>
        /// 得到Domain
        /// </summary>
        /// <returns></returns>
        /// <remarks></remarks>
        public static short GetDomain()
        {
            HttpContext context = HttpContext.Current;
            if ((context != null) & (context.Session != null))
            {
                return Convert.ToInt16(context.Session["Doamin"]);
            }
            return 0;
        }


        /// <summary>
        /// 添加AccountInfo
        /// </summary>
        /// <param name="model"></param>
        /// <remarks></remarks>
        public static void AddAccountInfo(AccountDto model)
        {
            if (model == null)
            {
                throw new ArgumentException("参数不能为NULL");
            }
            HttpContext context = HttpContext.Current;
            if ((context != null) & (context.Session != null))
            {
                context.Session[AccountInfo] = model;
            }
        }
        /// <summary>
        /// 删除AccountInfo
        /// </summary>
        /// <remarks></remarks>
        public static void RemoveAccountInfo()
        {
            HttpContext context = HttpContext.Current;
            if ((context != null) & (context.Session != null))
            {
                context.Session.Remove(AccountInfo);
            }
        }
        /// <summary>
        /// 得到AccountInfo
        /// </summary>
        /// <returns></returns>
        /// <remarks></remarks>
        public static AccountDto GetAccountInfo()
        {
            HttpContext context = HttpContext.Current;
            if ((context != null) & (context.Session != null))
            {
                return (AccountDto)context.Session[AccountInfo];
            }
            return null;
        }

    }
}

//=======================================================
//Service provided by Telerik (www.telerik.com)
//Conversion powered by NRefactory.
//Twitter: @telerik
//Facebook: facebook.com/telerik
//=======================================================
