using Autofac;
using Autofac.Integration.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Web.Framework.Runtime
{
    public class IocContainerManager
    {
        private static IContainer _container;

        public static ILifetimeScope MvcRequestTimeScope
        {
            get { return AutofacDependencyResolver.Current.RequestLifetimeScope; }
        }

        public static IContainer GetInstance()
        {
            return _container;
        }

        public static void SetInstance(IContainer container)
        {
            _container = container;
        }
    }
}
