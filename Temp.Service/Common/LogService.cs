using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Core.Data;
using Temp.Data;
using Temp.Data.Entity;

namespace Temp.Service.Common
{
     public partial class LogService
    {
        IRepository<Log> _logRepository;

        public IRepository<Log> UseRepository
        {
            get
            {
                return _logRepository;
            }
        }

        public LogService() : this(RepositoryFactory.Create<Log>())
        {

        }

        public LogService(IRepository<Log> logRepository)
        {
            _logRepository = logRepository;
        }


    }
}
