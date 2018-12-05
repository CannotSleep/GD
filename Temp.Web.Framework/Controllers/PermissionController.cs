using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Temp.Core.Util;
using Temp.Data.Entity;
using Temp.Service.Security;
using Tmp.Service;

namespace Temp.Web.Framework.Controllers
{
    public class PermissionController:BaseController
    {
        private IPermissionService _permissionService;
        private IDepartmentService _departmentService;

        public PermissionController(IPermissionService permissionService, IDepartmentService departmentService)
        {
            _permissionService = permissionService;
            _departmentService = departmentService;
        }

        public ActionResult Index() {
            return View();
        }

        public ActionResult AssignView(string menuID,string menuName) {
            ViewBag.MenuID = menuID;
            ViewBag.MenuName = menuName;
            return View();
        }

        [HttpGet]
        public ActionResult AssignSimplifyView() {
            return View();
        }


        /// <summary>
        /// 根据菜单、部门、查询有权限的角色
        /// </summary>
        /// <param name="menuID"></param>
        /// <param name="departmentID"></param>
        /// <returns></returns>
        public string GetSinglePermissionByDepartment(string menuID,string departmentID) {

            Guid _menusId = Guid.Parse(menuID);
            var list = new List<Permission>();
            Guid _departmentID = Guid.Parse(departmentID);
            list = _permissionService.GetModels(a=>a.MenuID == _menusId && a.DepartmentID == _departmentID);
            return JSONHelper.ToJsonSuggest(string.Join(",",list.Select(a=>a.RoleID).Distinct().ToArray()));
        }


        /// <summary>
        /// 权限分配
        /// </summary>
        /// <param name="menuID">菜单id，用英文逗号隔开</param>
        /// <param name="departmentID"></param>
        /// <param name="roleList"></param>
        /// <returns></returns>
        public string Assign(string menuID,string departmentID,string roleList) {
            List<Guid> dList = new List<Guid>();
            dList.Add(Guid.Parse(departmentID));
            return JSONHelper.ToJsonSuggest(_permissionService.Assign(menuID,dList,roleList),"操作成功","操作失败");
        }


        /// <summary>
        /// 快速权限分配
        /// </summary>
        /// <param name="RefDepartmentID">同权限部门</param>
        /// <param name="DepartmentID">部门ID</param>
        /// <returns></returns>
        [HttpPost]
        public string AssignSimplify(Guid RefDepartmentID,Guid DepartmentID) {
            return JSONHelper.ToJsonSuggest(_permissionService.AssignSimplify(RefDepartmentID,DepartmentID),"操作成功","操作失败");
        }

    }
}
