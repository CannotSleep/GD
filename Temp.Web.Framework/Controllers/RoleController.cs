using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Temp.Core.Util;
using Temp.Data.Entity;
using Temp.Service.Security;
using Temp.Web.Framework.Filters;
using Temp.Web.Framework.Models;
using Tmp.Service;

namespace Temp.Web.Framework.Controllers
{
    [LoginAuthorize]
    public class RoleController:BaseController
    {
        private IRoleService _RoleService;

        public RoleController(IRoleService RoleService)
        {
            _RoleService = RoleService;
        }

        public ActionResult Index() {
            return View();
        }

        public string Search(string name) {
            var list = (name == string.Empty || name == null ? _RoleService.UseRepository.Table.ToList() : _RoleService.GetModels(t => t.Name.Contains(name)));
            return JSONHelper.ToJson(list,list.Count);
        }

        public ActionResult AddView() {
            return View("Operate",new RoleOperate());
        }

        public ActionResult UpdateView(string ID) {
            var model = _RoleService.GetModel(Guid.Parse(ID));
            var newModel = Mapper.Map<Role,RoleOperate>(model);
            return View("Operate",newModel);
        }

        public string Add(RoleOperate model) {
            if (!ModelState.IsValid)
                return JSONHelper.ToJsonSuggest("格式错误");
            var newModel = Mapper.Map<RoleOperate,Role>(model);
            newModel.ID = Guid.NewGuid();
            return JSONHelper.ToJsonSuggest(_RoleService.Add(newModel),"添加成功","添加失败");
        }


        public string Update(RoleOperate model) {
            if (!ModelState.IsValid)
                return JSONHelper.ToJsonSuggest("格式错误");
            var newModel = _RoleService.GetModel(model.ID);
            newModel.Name = model.Name;
            newModel.IsUse = model.IsUse;
            return JSONHelper.ToJsonSuggest(_RoleService.Update(newModel),"编辑成功","编辑失败");
        }

    }
}
