using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Core.Data;
using Temp.Data;
using Temp.Data.Entity;
using Tmp.Service.Extension;

namespace Temp.Service.Security
{
    public partial class AppVersionService:IAppVersionService
    {
        IRepository<AppVersionControl> _appRepository;

        public IRepository<AppVersionControl> UseRepository
        {
            get; set;
        }

        public AppVersionService() : this(RepositoryFactory.Create<AppVersionControl>())
        {

        }

        public AppVersionService(IRepository<AppVersionControl> appRepository)
        {
            _appRepository = appRepository;
            UseRepository = appRepository;
        }

        public List<AppVersionControl> GetLastVersion(string appid)
        {
            var list = (from a in _appRepository.Table
                        where a.Appid == appid
                        orderby a.UpdateTime descending
                        select a
                        ).ToList();
            return list;
        }

        public List<AppVersionControl> Search(ref GridParams gridParams)
        {
            var query = from app in _appRepository.Table
                        orderby app.UpdateTime descending
                        select app;
            gridParams.TotalCount = query.Count();
            return QueryExtensions.Paging(query,gridParams);
        }
    }
}
