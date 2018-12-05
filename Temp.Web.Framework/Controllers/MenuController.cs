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
    public class MenuController : BaseController
    {
        private IMenuService _MenuService;

        public MenuController(IMenuService MenuService) {
            _MenuService = MenuService;
        }

        public ActionResult Index() {
            return View();
        }


        public ActionResult Detail(string ID,string parentID) {
            var model = new Menu();
            if (string.IsNullOrWhiteSpace(ID)) {
                if (!string.IsNullOrWhiteSpace(parentID))
                {
                    model.ParentID = Guid.Parse(parentID);
                    return View(model);
                }
                else
                    return View();
            }
            model = _MenuService.GetModel(Guid.Parse(ID));
            return View(model);
        }

        [ValidateInput(false)]
        public string Add(Menu model) {
            model.ID = Guid.NewGuid();
            return JSONHelper.ToJsonSuggest(_MenuService.Add(model),"添加成功","添加失败");
        }


        [ValidateInput(false)]
        public string Update(Menu model) {
            if (model.Url == null)
                model.Url = "";
            return JSONHelper.ToJsonSuggest(_MenuService.Update(model),"编辑成功","编辑失败");
        }


        /// <summary>
        /// 获取首页菜单项
        /// </summary>
        /// <returns></returns>
        public string HomeList() {
            var rolesInfo = GetRolesInfo();
            var list = new List<MenuTree>();
            var dto = _MenuService.GetListByDepartmentIDAndRole(GetDepartmentID(),rolesInfo);
            list = Mapper.Map<List<MenuDto>,List<MenuTree>>(dto);
            return JSONHelper.ToJson(list);
        }


        public string AllList() {
            var list = new List<MenuTree>();
            var dto = _MenuService.GetAllList();
            list = Mapper.Map<List<MenuDto>,List<MenuTree>>(dto);
            return JSONHelper.ToJson(list);
        }

        /// <summary>
        /// 有效菜单
        /// </summary>
        /// <returns></returns>
        public string ValidList() {
            var list = new List<MenuTree>();
            var dto = _MenuService.GetAllList(true);
            list = Mapper.Map<List<MenuDto>,List<MenuTree>>(dto);
            return JSONHelper.ToJson(list);
        }


    }
}
