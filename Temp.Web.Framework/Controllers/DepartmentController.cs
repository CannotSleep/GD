using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Temp.Core.Util;
using Temp.Data.Entity;
using Temp.Service.Dto;
using Temp.Service.Security;
using Temp.Web.Framework.Filters;
using Temp.Web.Framework.Models;
using Tmp.Service;

namespace Temp.Web.Framework.Controllers
{
    [LoginAuthorize]
    public class DepartmentController:BaseController
    {
        private IDepartmentService _departmentService;
        private IAccountService _accountService;
        private AccountDto _AccountInfo;

        public DepartmentController(IDepartmentService departmentService, IAccountService accountService)
        {
            _departmentService = departmentService;
            _accountService = accountService;
            _AccountInfo = GetAccountInfo();
        }

        public ActionResult Index() {
            return View();
        }

        public ActionResult Detail(string ID,string ParentID) {
            var model = new Department();
            if (string.IsNullOrWhiteSpace(ID)) {
                if (!string.IsNullOrWhiteSpace(ParentID))
                {
                    model.ParentID = Guid.Parse(ParentID);
                    var parent = _departmentService.GetModel(Guid.Parse(ParentID));
                    ViewBag.ParentName = parent.Name;//由于ztree暂无初始化选中，返回id对应的描述
                    model.Domain = parent.Domain; //子部门的domain要跟父级一致
                    return View(model);
                }
                else
                    return View();
            }
            model = _departmentService.GetModel(Guid.Parse(ID));
            var pModel = _departmentService.GetModel(model.ParentID);
            if (pModel != null)
                ViewBag.ParentName = pModel.Name;
            return View(model);
        }

        public string Add(Department model) {
            //if(!ModelState.IsValid)
            //  return JSONHelper.ToJsonSuggest("格式错误")
            model.ID = Guid.NewGuid();
            return JSONHelper.ToJsonSuggest(_departmentService.Add(model),"添加成功","添加失败");
        }

        public string Update(Department model) {
            //if(!ModelState.IsValid)
            //   return JSONHelper.ToJsonSuggest("格式错误")
            return JSONHelper.ToJsonSuggest(_departmentService.Update(model),"编辑成功","编辑失败");
        }



        /// <summary>
        /// 得到所有部门
        /// </summary>
        /// <param name="isAll">是否全部，包含不启用的</param>
        /// <returns></returns>
        public string GetDepartments(bool isAll) {
            var defaultGuid = Guid.Empty;
            //获取当前顶级部门
            var list = new List<Department>();
            var newList = new List<DepartmentTree>();
            if (_AccountInfo.Domain > 0)
                list = _departmentService.GetModels(a=>a.Domain==_AccountInfo.Domain&&a.ParentID==defaultGuid);
            else
                list = _departmentService.GetModels(a=>a.ParentID==defaultGuid);
            if (_AccountInfo.DepartmentType!=0&&list.Count==1) {//不是顶级-整个局的权限
                var pid = list[0].ID;
                var type = 0;
                if (_AccountInfo.DepartmentType < 1000)//属于分公司的权限
                    type = _AccountInfo.DepartmentType;
                else //属于分公司子公司的权限
                    type = _AccountInfo.DepartmentType / 1000;
                list = _departmentService.GetModels(a=>a.Domain==_AccountInfo.Domain&&a.ParentID==pid&&a.Type==type &&a.IsUse==true);
            }
            if (!isAll)
                list = list.Where(a => a.IsUse == true).ToList();
            if (list !=null) {
                newList = Mapper.Map<List<Department>,List<DepartmentTree>>(list);
                foreach (var item in newList) {
                    GetChildren(item, isAll);
                }
            }
            return JSONHelper.ToJson(newList);
        }

        /// <summary>
        /// 整合
        /// </summary>
        public void GetChildren(DepartmentTree model,bool isAll) {
            var list = new List<Department>();
            if (isAll)
                list = _departmentService.GetModels(a=>a.ParentID==model.id).OrderBy(a=>a.Priority).ToList();
            else
                list = _departmentService.GetModels(a=>a.ParentID==model.id && a.IsUse == true).OrderBy(a=>a.Priority).ToList();
            if (list.Count>0) {
                var newList = new List<DepartmentTree>();
                newList = Mapper.Map<List<Department>,List<DepartmentTree>>(list);
                model.children = newList;
                foreach (var item in newList) {
                    GetChildren(item,isAll);
                }
            }
        }



        public string GetAccountTreeByDept() {
            var defaultGuid = Guid.Empty;
            //获取当前顶级部门
            var list = new List<Department>();
            var newList = new List<AccountTreeByDept>();
            if (_AccountInfo.Domain > 0)
                list = _departmentService.GetModels(a => a.Domain == _AccountInfo.Domain && a.ParentID == defaultGuid && a.IsUse == true);
            else
                list = _departmentService.GetModels(a=>a.ParentID==defaultGuid && a.IsUse == true);
            if (_AccountInfo.DepartmentType!=0 && list.Count ==1) {//不是顶级-整个局的权限
                var pid = list[0].ID;
                var type = 0;
                if (_AccountInfo.DepartmentType < 1000)//属于分公司的权限
                    type = _AccountInfo.DepartmentType;
                else //属于分公司子公司的权限
                    type = _AccountInfo.DepartmentType / 1000;
                list = _departmentService.GetModels(a=>a.Domain == _AccountInfo.Domain && a.ParentID == pid && a.Type == type && a.IsUse == true);
            }
            if(list!=null){
                newList = Mapper.Map<List<Department>, List<AccountTreeByDept>>(list);
                foreach (var item in newList) {
                    GetAccountTreeByDeptChildren(item);
                }
            }
            return JSONHelper.ToJson(newList);
        }


        public void GetAccountTreeByDeptChildren(AccountTreeByDept model) {
            var list = new List<Department>();
            list = _departmentService.GetModels(a=>a.ParentID == model.ID && a.IsUse == true).OrderBy(a=>a.Priority).ToList();
            if (list.Count>0) {
                var newList = new List<AccountTreeByDept>();
                newList = Mapper.Map<List<Department>,List<AccountTreeByDept>>(list);
                model.children = newList;

                foreach (var item in newList) {
                    GetAccountTreeByDeptChildren(item);
                }
            }
            var accountTreeList = new List<AccountTree>();
            var accountList = _accountService.GetModels(a=>a.Department == model.ID);
            accountTreeList = Mapper.Map<List<Account>,List<AccountTree>>(accountList);
            foreach (var a in accountTreeList) {
                AccountTreeByDept at = new AccountTreeByDept();
                at.ID = Guid.Empty;
                at.ParentID = model.ID;
                at.Name = a.Name;
                a.Name = model.Name;
                at.Acount = a;
                if (model.children == null)
                    model.children = new List<AccountTreeByDept>();
                model.children.Add(at);
            }


        }



    }
}
