using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Core.Data;
using Temp.Core.Dependency;

namespace Temp.Data
{
    /// <summary>
    /// Repository
    /// </summary>
    public class RepositoryFactory
    {
        static public IRepository<T> Create<T>() where T : BaseEntity
        {
            return IocObjectManager.GetInstance().Resolve<IRepository<T>>();
        }
    }
}
