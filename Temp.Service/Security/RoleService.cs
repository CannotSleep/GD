using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Core.Data;
using Temp.Data;
using Temp.Data.Entity;

namespace Temp.Service.Security
{
    public partial class RoleService
    {
        IRepository<Role> _RoleRepository;

        public IRepository<Role> UseRepository
        {
            get; set;
        }

        public RoleService() : this(RepositoryFactory.Create<Role>())
        {

        }

        public RoleService(IRepository<Role> RoleRepository)
        {
            _RoleRepository = RoleRepository;
            UseRepository = RoleRepository;
        }

    }
}
