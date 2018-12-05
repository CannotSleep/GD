using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Temp.Core.Util;
using Temp.Data.Entity;
using Temp.Service.Security;
using Temp.Web.Framework.Filters;
using Tmp.Service;

namespace Temp.Web.Framework.Controllers
{
    [LoginAuthorize]
    public class AppUpdateController:BaseController
    {
        private IAppVersionService _appService;


        public AppUpdateController(IAppVersionService appService)
        {
            _appService = appService;
        }

        public ActionResult Index() {
            return View();
        }

        public ActionResult AddView() {
            return View("Operate",new AppVersionControl());
        }

        public ActionResult UpdateView(string id) {
            var model = _appService.GetModel(int.Parse(id));
            return View("Operate",model);
        }

        public string Search() {
            var gridParams = this.GetGridParamsForLayui();
            List<AppVersionControl> list = _appService.Search(ref gridParams);
            return JSONHelper.ToJson(list,gridParams.TotalCount);
        }

        public string Upload() {
            var files = Request.Files;
            string relativePath = @"/File/APP/";
            string filepath = System.Web.Hosting.HostingEnvironment.MapPath(relativePath);
            if (!Directory.Exists(filepath)) {
                Directory.CreateDirectory(filepath);
            }
            for (int i= 0;i<files.Count;i++) {
                string fileName = files[i].FileName;
                relativePath = relativePath + fileName;
                fileName = filepath + fileName;
                files[i].SaveAs(fileName);
            }
            return relativePath;
        }

        [HttpPost]
        public string Add(AppVersionControl model) {
            return JSONHelper.ToJsonSuggest(_appService.Add(model),"添加成功","添加失败");
        }

        [HttpPost]
        public string Update(AppVersionControl model) {
            var newModel = _appService.GetModel(model.ID);
            newModel.Appid = model.Appid;
            newModel.Version = model.Version;
            newModel.Note = model.Note;
            newModel.AndroidUpdateUrl = model.AndroidUpdateUrl;
            newModel.IosUpdateUrl = model.IosUpdateUrl;
            newModel.UpdateTime = model.UpdateTime;
            return JSONHelper.ToJsonSuggest(_appService.Update(newModel),"编辑成功","编辑失败");
        }

    }
}
