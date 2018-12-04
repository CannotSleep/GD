using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Temp.Core.Util;

namespace Temp.Web.Framework.Core
{
    public class HttpRequestHelper
    {

        public static T ConvertToModel<T>(HttpContext context) where T : new()
        {
            T item = new T();
            dynamic propertys = item.GetType().GetProperties();
            if (context.Request.Form.Count > 0)
            {
                foreach (string key in context.Request.Form.Keys)
                {
                    foreach (PropertyInfo pi in propertys)
                    {
                        if (key.ToLower() == pi.Name.ToLower())
                        {
                            if (!pi.CanWrite)
                            {
                                continue;
                            }
                            if (pi.PropertyType == typeof(Guid))
                            {
                                pi.SetValue(item, Guid.Parse(context.Request.Form[key]), null);
                                //pi.SetValue(item,Convert.ChangeType(context.Request.Form[key]),pi.PropertyType),null);
                            }
                            else
                            {
                                pi.SetValue(item, Convert.ChangeType(context.Request.Form[key], pi.PropertyType), null);
                            }
                        }
                    }
                }
            }
            else {
                foreach (string key in context.Request.QueryString.Keys) {
                    foreach (PropertyInfo pi in propertys) {
                        if (key.ToLower()==pi.Name.ToLower()) {
                            if (!pi.CanWrite) {
                                continue;
                            }
                            if (pi.PropertyType == typeof(Guid))
                            {
                                pi.SetValue(item,Guid.Parse(context.Request.QueryString[key]),null);
                                //pi.SetValue(item,Convert.ChangeType(context.Request.Form[key],pi.PropertyType),null)
                            }
                            else {
                                pi.SetValue(item,Convert.ChangeType(context.Request.QueryString[key], pi.PropertyType),null);
                                //pi.SetValue(item,Convert.ChangeType(context.Request.Form[key],pi.PropertyType),null)
                            }
                        }
                    }
                }
            }
            return item;
        }

        /// <summary>
        /// 序列化Json对象为model
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="context"></param>
        /// <returns></returns>
        public static T ConvertJsonToModel<T>(HttpContext context) where T : new() {
            T item = new T();
            dynamic propertys = item.GetType().GetProperties();
            HttpRequest request = context.Request;
            Stream stream = request.InputStream;

            if (stream.Length>0) {
                StreamReader streamReader = new StreamReader(stream);
                string json = streamReader.ReadToEnd();
                item = JSONHelper.FromJsonToAnonymousType(json,item);
            }

            return item;
        }

        /// <summary>
        /// 获取客户端传递的数据
        /// </summary>
        /// <returns></returns>
        public static string GetInputStreamJson(HttpContext context) {
            HttpRequest request = context.Request;
            Stream stream = request.InputStream;
            if (stream.Length>0) {
                StreamReader streamReader = new StreamReader(stream);
                return streamReader.ReadToEnd();
            }
            return "";
        }



    }
}
