using AutoMapper;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;
using System.Web.Mvc;
using Temp.Core.Security;
using Temp.Core.Util;
using Temp.Data.Entity;
using Temp.Service.Dto;
using Temp.Service.Security;
using Temp.Web.Framework.Core;
using Temp.Web.Framework.Models;
using Tmp.Service;

namespace Temp.Web.Framework.Controllers
{
    public class AccountController:BaseController
    {
        private IAccountService _accountService;
        private IViewAccountService _viewAccountService;
        private IDepartmentService _departmentService;
        private IAccountOfRoleService _accountOfRoleService;

        public AccountController(IAccountService accountService, IViewAccountService viewAccountService, IDepartmentService departmentService, IAccountOfRoleService accountOfRoleService)
        {
            _accountService = accountService;
            _viewAccountService = viewAccountService;
            _departmentService = departmentService;
            _accountOfRoleService = accountOfRoleService;
        }

        public ActionResult Index() {
            //ViewData["departmentSelect"]=new SelectList(_departmentService.GetDepartmentListByDomain(SessionManager.GetDomain()),"Value","Text");
            return View();
        }

        public ActionResult Login() {
            return View();
        }

        public string Search(AccountDto searchmodel) {

            var gridParams = this.GetGridParamsForLayui();
            searchmodel.Domain = SessionManager.GetDomain();
            searchmodel.DepartmentType = SessionManager.GetAccountInfo().DepartmentType;
            var list = _viewAccountService.GetAccountList(searchmodel,ref gridParams);
            return JSONHelper.ToJson(list,gridParams.TotalCount);
        }

        public ActionResult AddView() {
            //ViewData["departmentSelect"]=new SelectList(_departmentService.GetDepartmentListByDomain(SessionManager.GetDomain()),"Value","Text")
            return View("Operate",new AccountOperate());
        }

        public ActionResult UpdateView(string AccountID) {
            var model = _accountService.GetModel(Guid.Parse(AccountID));
            var newModel = Mapper.Map<Account,AccountOperate>(model);
            newModel.Password = AESS.Decrypt(newModel.Password);
            newModel.RptPassword = newModel.Password;
            newModel.RolesID = string.Join(",",_accountOfRoleService.GetModels(a=>a.AccountID==model.ID).Select(a=>a.RoleID).ToArray());
            var dModel = _departmentService.GetModel(model.Department);
            if (dModel != null)
                ViewBag.DepartmentName = dModel.Name;
            return View("Operate", newModel);
        }

        public string Add(AccountOperate model) {
            if (!ModelState.IsValid)
                return JSONHelper.ToJsonSuggest("格式错位");
            var newModel = Mapper.Map<AccountOperate,Account>(model);
            newModel.Password = AESS.Encrypt(string.IsNullOrWhiteSpace(model.Password)?"123456":model.Password);//初始密码123456
            newModel.ID = Guid.NewGuid();

            bool result = false;
            using (TransactionScope ts = new TransactionScope()) {
                try {
                    _accountService.Add(newModel);

                    //加入用户角色
                    _accountOfRoleService.Assign(newModel.ID,model.RolesID);

                    ts.Complete();
                    result = true;
                }
                catch (Exception e) {
                    result = false;
                }
            }
            return JSONHelper.ToJsonSuggest(result,"添加成功","添加失败");
        }

        public string Update(AccountOperate model) {
            if (!ModelState.IsValid)
                return JSONHelper.ToJsonSuggest("格式错误");
            //var newModel = MapperMap<AccountOperate,Account>(model);
            var newModel = _accountService.GetModel(model.ID);
            newModel = Mapper.Map<AccountOperate, Account>(model);
            newModel.UpdateTime = DateTime.Now;
            newModel.Password = AESS.Encrypt(newModel.Password);
            newModel.ExpireDate = model.ExpireDate;
            bool result = false;
            using (TransactionScope ts = new TransactionScope())
            {
                try
                {
                    _accountService.Update(newModel);

                    //编辑用户角色
                    _accountOfRoleService.Assign(newModel.ID,model.RolesID);

                    ts.Complete();
                    result = true;
                }
                catch (Exception e)
                {
                    result = false;
                }

            }
            return JSONHelper.ToJsonSuggest(result,"编辑成功","编辑失败");
        }

        public ActionResult BatchAddView() {
            return View();
        }

        //public string BatchAdd(HttpPostedFileBase file) {
        //    var dt = NPOIHelper.Import(file.InputStream,0,0);
        //    return JSONHelper.ToJsonSuggest(_accountService.BatchAdd(dt),"添加成功","添加失败");

        //}

        public ActionResult PersonalInfo(string accountID) {
            var model = _accountService.GetModel(Guid.Parse(accountID));
            var newModel = Mapper.Map<Account,ChangeInfo>(model);
            newModel.Password = AESS.Decrypt(newModel.Password);
            newModel.RptPassword = newModel.Password;
            return View(newModel);
        }

        public string ChangePersonalInfo(ChangeInfo model) {
            if (!ModelState.IsValid)
                return JSONHelper.ToJsonSuggest("格式错误");
            var newModel = _accountService.GetModel(model.ID);
            newModel.UpdateTime = DateTime.Now;
            newModel.Password = AESS.Encrypt(model.Password);
            newModel.Name = model.Name;
            return JSONHelper.ToJsonSuggest(_accountService.Update(newModel),"编辑成功","编辑失败");
        }

        public JsonResult Verify(string AccountNumber) {
            var accountModel = _accountService.GetModel(a=>a.AccountID==AccountNumber);
            return Json(accountModel!=null?true:false,JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public string LoginCheck(LoginModel model) {
            try {
                int error = 0;
                if (Session["error"] == null)
                {
                    Session["error"] = 1;
                }
                else {
                    error = int.Parse(Session["error"].ToString());
                    Session["error"] = ++error;
                }
                if (error>=3) {
                    if (model.CheckCode.ToLower()!=(Session["code"]!=null?Session["code"].ToString().ToLower():"")) {
                        return "3";
                    }
                }
                Session.Remove("code");
                string realPassword = AESS.Encrypt(model.Password);
                var account = _accountService.GetModel(a=>a.AccountID==model.AccountID&&a.Password==realPassword&&a.IsUse==true);
                var rolesInfo = _accountOfRoleService.GetModels(a=>a.AccountID == account.ID && a.IsUse == true);
                if (null != account) {
                    //清空缓存
                    SessionManager.Logout();
                    CookieManager.RemoveVersion();
                    //加入新缓存
                    //var rolesInfo = _accountOfRolesService.GetModel(a=>a.AccountID==account.ID && a.IsUse==true);
                    //SessionManager.AddAccountInfo(account);
                    SessionManager.AddRolesInfo(rolesInfo);
                    //每次登陆都重新获取缓存
                    CookieManager.AddVersion(new Random().Next(100000,999999).ToString());
                    //加入Domain
                    var department = _departmentService.GetModel(account.Department);
                    if (department != null)
                        SessionManager.AddDomain(department.Domain);
                    //dto加入session
                    var dto = _accountService.GetAccountInfo(account.ID);
                    if (dto != null)
                        //SessionExtension.AddAccountInfo(dto);
                        SessionManager.AddAccountInfo(dto);
                    var result = DateTime.Compare(account.ExpireDate,DateTime.Now);
                    if (result<0) {
                        return "4";
                    }
                    return "1";
                }

            }
            catch (Exception e) {
                //todo
            }
            return "0";
        }


        public ActionResult GetImg() {//获取验证码
            string code = "";
            CheckCode checkCode = new CheckCode();
            MemoryStream ms = checkCode.GetCodeImg(4,out code);
            Session["code"] = code;
            return File(ms.ToArray(),"image/jpeg");
        }

        /// <summary>
        /// 退出系统
        /// </summary>
        /// <returns></returns>
        public ActionResult Exit() {
            SessionManager.Logout();
            return RedirectToAction("Login");
        }

        /// <summary>
        /// 选择人员，单选
        /// </summary>
        /// <returns></returns>
        public ActionResult SelectRectPeopleSingle() {
            return View();
        }

        /// <summary>
        /// 选择人员，多选
        /// </summary>
        /// <returns></returns>
        public ActionResult SelectRectPeopleMulti()
        {
            return View();
        }
    }
}
