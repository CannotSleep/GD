using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Core.Dependency
{
    public interface IIocLifetimeScope
    {

        /// <summary>
        /// 处理基于IDependency接口的注入
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        T Resolve<T>() where T : IDependency;
    }
}
