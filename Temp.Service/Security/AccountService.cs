using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Core.Data;
using Temp.Data;
using Temp.Data.Entity;
using Temp.Service.Dto;

namespace Temp.Service.Security
{
    public partial class AccountService:IAccountService
    {
        IRepository<Account> _accountRepository;
        IRepository<Department> _departmentRepository;
        IRepository<Role> _rolesRepository;
        IRepository<AccountOfRole> _accountOfRoleRepository;

        public IRepository<Account> UseRepository
        {
            get; set;
        }

        public AccountService() : this(RepositoryFactory.Create<Account>()
            , RepositoryFactory.Create<Department>()
            , RepositoryFactory.Create<Role>()
            , RepositoryFactory.Create<AccountOfRole>())
        {

        }

        public AccountService(IRepository<Account> accountRepository, IRepository<Department> departmentRepository, IRepository<Role> rolesRepository, IRepository<AccountOfRole> accountOfRoleRepository)
        {
            _accountRepository = accountRepository;
            _departmentRepository = departmentRepository;
            _rolesRepository = rolesRepository;
            _accountOfRoleRepository = accountOfRoleRepository;
            UseRepository = accountRepository;
        }

        public AccountDto GetAccountInfo(Guid id)
        {
            AccountDto account = new AccountDto();
            var list = (
                from a in _accountRepository.Table
                join b in _accountOfRoleRepository.Table on a.ID equals b.AccountID
                join c in _rolesRepository.Table on b.RoleID equals c.ID
                join d in _departmentRepository.Table on a.Department equals d.ID
                where a.IsUse == true && a.ID == id
                select new { a,c,d}).ToList();
            if (list !=null && list.Count()>0) {
                account.ID = list.FirstOrDefault().a.ID;
                account.AccountID = list.FirstOrDefault().a.AccountID;
                //account.Birth = list.FirstOrDefault().a.Birth;
                account.DepartmentID = list.FirstOrDefault().a.Department;
                account.DepartmentName = list.FirstOrDefault().d.Name;
                account.DepartmentType = list.FirstOrDefault().d.Type;
                //account.Email = list.FirstOrDefault().a.Email;
                //account.Img = list.FirstOrDefault().a.Img;
               // account.Mobilephone = list.FirstOrDefault().a.Mobilephone;
                account.Name = list.FirstOrDefault().a.Name;
                account.Domain = list.FirstOrDefault().d.Domain;
                //account.Phone = list.FirstOrDefault().a.Phone;
                //account.Sex = list.FirstOrDefault().a.Sex;
                if (list.Where(p => p.c.Name.Contains("超级管理员")).Count() > 0)
                    account.IsAdmin = true;
                else account.IsAdmin = false;
                account.Roles = list.Select(p => p.c).ToList();
            }
            return account;
        }
    }
}
