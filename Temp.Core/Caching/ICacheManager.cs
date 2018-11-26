using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Core.Dependency;

namespace Temp.Core.Caching
{
    public interface ICacheManager:IDependency
    {
        /// <summary>
        /// Gets or sets the value associated with the specified key
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="key"></param>
        /// <returns></returns>
        T Get<T>(string key);


        /// <summary>
        /// Adds the specified key and object to the cache
        /// </summary>
        /// <param name="key"></param>
        /// <param name="data"></param>
        /// <param name="cacheTime"></param>
        void Set(string key,object data,int cacheTime);


        /// <summary>
        /// Gets a value indicating whether the value associated with the specified key is cached
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        bool IsSet(string key);


        /// <summary>
        /// Removes the value with the specified key from the cache
        /// </summary>
        /// <param name="key"></param>
        void Remove(string key);


        /// <summary>
        /// Removes items by pattern
        /// </summary>
        /// <param name="pattern"></param>
        void RemoveByPattern(string pattern);


        /// <summary>
        /// clear all cache data
        /// </summary>
        void Clear();
    }
}
