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
    public partial class UserLoginTokenService
    {
        IRepository<UserLoginToken> _userLoginTokenRepository;

        public IRepository<UserLoginToken> UseRepository
        {
            get; set;
        }

        public UserLoginTokenService() : this(RepositoryFactory.Create<UserLoginToken>())
        {

        }

        public UserLoginTokenService(IRepository<UserLoginToken> userLoginTokenRepository)
        {
            _userLoginTokenRepository = userLoginTokenRepository;
            UseRepository = userLoginTokenRepository;
        }
    }
}
