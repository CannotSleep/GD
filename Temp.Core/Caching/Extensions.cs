using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Core.Caching
{
    /// <summary>
    /// Extensions
    /// </summary>
    public static class CacheExtensions
    {
        /// <summary>
        /// Variable(lock) to support thread-safe
        /// </summary>
        private static readonly object _syncObject = new object();


        /// <summary>
        /// Get a cached item. if it's not in the cache yet,then load and cache it
        /// </summary>
        /// <typeparam name="T">Type</typeparam>
        /// <param name="cacheManager">Cache manager</param>
        /// <param name="key">Cache key</param>
        /// <param name="acquire">Function to load item if it's not in the cache yet</param>
        /// <returns></returns>
        public static T Get<T>(this ICacheManager cacheManager,string key,Func<T> acquire) {
            return Get(cacheManager,key,60,acquire);
        }


        /// <summary>
        /// Get a cached item.if it's not in the cache yet,then load and cache it
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="cacheManager"></param>
        /// <param name="key"></param>
        /// <param name="cacheTime"></param>
        /// <param name="acquire"></param>
        /// <param name="judgeClear"></param>
        /// <returns></returns>
        public static T Get<T>(this ICacheManager cacheManager, string key, int cacheTime, Func<T> acquire, Func<bool> judgeClear = null) {

            lock (_syncObject) {
                if (judgeClear != null) {
                    if (judgeClear()) {
                        cacheManager.Remove(key);
                    }
                }

                if (cacheManager.IsSet(key)) {
                    return cacheManager.Get<T>(key);
                }

                var result = acquire();
                if (cacheTime > 0)
                    cacheManager.Set(key,result,cacheTime);
                return result;
            }

        }

    }
}
