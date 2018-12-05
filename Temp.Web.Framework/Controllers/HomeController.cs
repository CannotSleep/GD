using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Temp.Service.Security;
using Temp.Web.Framework.Core;
using Temp.Web.Framework.Filters;

namespace Temp.Web.Framework.Controllers
{
    /// <summary>
    /// 摘要说明
    /// </summary>
    [LoginAuthorize]
    public class HomeController:BaseController
    {
        private IAccountOfRoleService _accountOfRoleService;
        private IRoleService _roleService;

        public HomeController(IAccountOfRoleService accountOfRoleService,IRoleService roleService) {
            _accountOfRoleService = accountOfRoleService;
            _roleService = roleService;
        }

        public ActionResult Index() {
            //获取用户信息
            var user = SessionManager.GetAccountInfo();
            //var userRole = SessionManager.GetRolesInfo();
            //var accountOfRoles=_accountOfRolesService.GetModels(t=>t.AccountID==user.ID && t.IsUse == true)
            //var roleLists = _rolesService.GetModels(t=>t.IsUse == true).ToList();

            //传到View
            //ViewBag.accountOfRoles = accountOfRoles;账户拥有的角色
            //ViewBag.roleLists=roleLists://角色对应的名称
            //ViewBag.userRole = userRole;//当前登录的角色
            ViewBag.user = user;//当前登陆用户
            return View();
        }

        public ActionResult Index2()
        {
            //获取用户信息
            var user = SessionManager.GetAccountInfo();
            ViewBag.user = user;
            return View();
        }

        public ActionResult Main()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }


    }
}
