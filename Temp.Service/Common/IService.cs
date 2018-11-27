using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Core.Data;
using Temp.Core.Dependency;

namespace Temp.Service.Common
{
    public interface IService<T> : IDependency where T : BaseEntity
    {

        IRepository<T> UseRepository
        {
            get;
        }



    }
}
