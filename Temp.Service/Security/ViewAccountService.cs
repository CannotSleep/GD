using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Core.Data;
using Temp.Core.Dependency;
using Temp.Data;
using Temp.Service.Dto;
using Tmp.Service.Extension;

namespace Temp.Service.Security
{
    public class ViewAccountService:IViewAccountService
    {
        private IRepository<ViewAccount> _viewAccountRepository;
        private IDepartmentService _departmentService = IocObjectManager.GetInstance().Resolve<IDepartmentService>();

        public IRepository<ViewAccount> UseRepository
        {
            get; set;
        }

        public ViewAccountService() : this(RepositoryFactory.Create<ViewAccount>())
        {

        }

        public ViewAccountService(IRepository<ViewAccount> viewAccountRepository)
        {
            _viewAccountRepository = viewAccountRepository;
            UseRepository = viewAccountRepository;
        }

        public List<AccountDto> GetAccountList(AccountDto model,ref GridParams gridParams) {
            var filter = _departmentService.FilterByAccount(model);
            var query = from a in _viewAccountRepository.Table
                        join f in filter on a.DepartmentID equals f.ID
                        select new AccountDto
                        {
                            ID=a.ID,
                            AccountID = a.AccountID,
                            Name = a.Name,
                            DepartmentID = a.DepartmentID,
                            DepartmentName = a.DepartmentName,
                            DepartmentType = a.DepartmentType,
                            //Sex=a.Sex,
                            //Birth = a.Birth,
                            //Mobilephone = a.Mobilephone,
                            //Phone=a.Phone,
                            IsUse = a.IsUse,
                            IsAdmin = (a.RolesName.Contains("超级管理员")?true:false),
                            //IsAdmin = (a.RolesID.Contains("超级管理员的主键")?true:false)
                            RolesID = a.RolesID,
                            RolesName = a.RolesName,
                            Domain = a.Domain
                        };
            if (model.ID != null && model.ID != Guid.Empty)
                query = query.Where(t=>t.ID==model.ID);
            if (!string.IsNullOrWhiteSpace(model.AccountID))
                query = query.Where(t => t.AccountID == model.AccountID);
            if (model.DepartmentID != null && model.DepartmentID != Guid.Empty)
                query = query.Where(t => t.DepartmentID == model.DepartmentID);
            if (!string.IsNullOrWhiteSpace(model.RolesID))
                query = query.Where(t=>t.RolesID.Contains(model.RolesID));

            //if(model.Domain>0) 查看所有
            //    query = query.Where(t=>t.Domain==model.Domain)
            gridParams.TotalCount = query.Count();
            query = query.OrderBy(a=>a.AccountID);
            return QueryExtensions.Paging(query, gridParams).ToList();
        }
    }
}
