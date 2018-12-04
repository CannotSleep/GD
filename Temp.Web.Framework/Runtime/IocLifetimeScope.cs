﻿using Autofac;
using Autofac.Integration.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Temp.Core.Dependency;

namespace Temp.Web.Framework.Runtime
{
    /// <summary>
    /// 自定义的Razor引擎，为了在mvc中使用多级目录
    /// </summary>
    public class IocLifetimeScope : IIocLifetimeScope
    {
        public T Resolve<T>() where T : IDependency
        {
            var timeScope = AutofacDependencyResolver.Current.RequestLifetimeScope;

            if (timeScope == null)
            {
                var container = IocContainerManager.GetInstance();
                ILifetimeScope scope;

                if (HttpContext.Current != null && (scope = (ILifetimeScope)HttpContext.Current.Items["PerRequestScope"]) != null)
                {
                    return scope.Resolve<T>();
                }
                else
                {
                    var scope1 = container.BeginLifetimeScope();
                    HttpContext.Current.Items["PerRequestScope"] = scope1;
                    return scope1.Resolve<T>();
                }
            }
            else
            {
                return timeScope.Resolve<T>();
            }
        }
    }
}
