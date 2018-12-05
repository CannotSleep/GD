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
    public partial class UserLoginService
    {
        IRepository<UserLogin> _userLoginRepository;

        public IRepository<UserLogin> UseRepository
        {
            get; set;
        }

        public UserLoginService() : this(RepositoryFactory.Create<UserLogin>())
        {

        }

        public UserLoginService(IRepository<UserLogin> userLoginRepository)
        {
            _userLoginRepository = userLoginRepository;
            UseRepository = userLoginRepository;
        }
    }
}
