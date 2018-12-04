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
    public partial class DomainService:IDomainService
    {

        IRepository<Domain> _domainRepository;

        public IRepository<Domain> UseRepository {
            get;set;
        }

        public DomainService() : this(RepositoryFactory.Create<Domain>()) {

        }

        public DomainService(IRepository<Domain> domainRepository) {
            _domainRepository = domainRepository;
            UseRepository = _domainRepository;
        }

    }
}
