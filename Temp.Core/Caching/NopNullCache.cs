using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Core.Caching
{
    public partial class NopNullCache : ICacheManager
    {

        /// <summary>
        /// Gets or sets the value associated with the specified key
        /// </summary>
        /// <typeparam name="T">Type</typeparam>
        /// <param name="key">the key of the value to get</param>
        /// <returns>the value associated with the specified key</returns>
        public virtual T Get<T>(string key)
        {
            return default(T);
        }

        /// <summary>
        /// Adds the specified key and object to the cache
        /// </summary>
        /// <param name="key">key</param>
        /// <param name="data">Data</param>
        /// <param name="cacheTime">Cache time</param>
        public virtual void Set(string key, object data, int cacheTime)
        {
            
        }

        /// <summary>
        /// Gets a value indicating whether the value associated with the specified key is cached
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public bool IsSet(string key)
        {
            return false;
        }


        /// <summary>
        /// Removes the value with the specified key from the cache
        /// </summary>
        /// <param name="key"></param>
        public virtual void Remove(string key)
        {

        }

        /// <summary>
        /// Removes items by pattern
        /// </summary>
        /// <param name="pattern"></param>
        public virtual void RemoveByPattern(string pattern)
        {

        }



        /// <summary>
        /// clear all cache data
        /// </summary>
        public virtual void Clear()
        {
        }
    }
}
