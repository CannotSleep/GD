using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Core.Dependency;
using Temp.Data.Entity;
using Temp.Service.Dto;
using Temp.Service.Security;

namespace Temp.Web.Framework.API
{
    public class BaseApiController:DefaultApiController
    {
        private IAccountService _accountService = IocObjectManager.GetInstance().Resolve<IAccountService>();
        private IUserLoginTokenService _userLoginTokenService = IocObjectManager.GetInstance().Resolve<IUserLoginTokenService>();
        private IDepartmentService _departmentService = IocObjectManager.GetInstance().Resolve<IDepartmentService>();
        private IAccountOfRoleService _accountOfRoleService = IocObjectManager.GetInstance().Resolve<IAccountOfRoleService>();

        public new AccountDto User
        {
            get {
                AccountDto user = null;
                UserLoginToken userweblogin = GetUserWebLogin;
                user = _accountService.GetAccountInfo(userweblogin.AccountID);
                return user;
            }
        }

        public Guid UserID
        {
            get
            {
                return User.ID;
            }  
        }

        public string AccountID
        {
            get {
                return User.AccountID;
            }
        }

        public int Domain
        {
            get {
                var model = _departmentService.GetModel(User.DepartmentID);
                return model.Domain;
            }
        }

        public UserLoginToken GetUserWebLogin {
            get {
                string tokenID = CurrentToken;
                UserLoginToken userweblogin = _userLoginTokenService.GetModel(a=>a.TokenID==tokenID);
                return userweblogin;
            }
        }

        public int GetPagerCount {
            get {
                int pagesize = 1;
                if (!int.TryParse(System.Configuration.ConfigurationManager.AppSettings.Get("listcount"), out pagesize));
                    pagesize = 1;
                return pagesize;
            }
        }

        public List<AccountOfRole> _RolesInfo
        {
            get {
                var rolesInfo = _accountOfRoleService.GetModels(a=>a.AccountID == User.ID && a.IsUse == true);
                return rolesInfo; 
            }
        }
    }
}
