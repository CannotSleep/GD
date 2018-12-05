using AutoMapper;
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
    public class MenuService : IMenuService
    {
        IRepository<Menu> _MenuRepository;
        IRepository<Permission> _permissionRepository;
        IRepository<AccountOfRole> _accountOfRolesRepository;

        public IRepository<Menu> UseRepository
        {
            get; set;
        }

        public MenuService() : this(RepositoryFactory.Create<Menu>()
            , RepositoryFactory.Create<Permission>()
            , RepositoryFactory.Create<AccountOfRole>())
        {

        }

        public MenuService(IRepository<Menu> MenuRepository, IRepository<Permission> permissionRepository, IRepository<AccountOfRole> accountOfRolesRepository)
        {
            _MenuRepository = MenuRepository;
            _permissionRepository = permissionRepository;
            _accountOfRolesRepository = accountOfRolesRepository;
            UseRepository = MenuRepository;
        }

        /// <summary>
        /// 查询所有菜单
        /// </summary>
        /// <param name="needValid"></param>
        /// <returns></returns>
        public List<MenuDto> GetAllList(bool needValid = false)
        {
            List<MenuDto> list = new List<MenuDto>();
            var Menu = _MenuRepository.Table;
            if (needValid)
                Menu = Menu.Where(a=>a.IsUse==true);

            Menu.Where(
                p=>p.ParentID == new Guid()).OrderBy(p=>p.Priority).Distinct().ToList().ForEach(p=> {
                    MenuDto model = new MenuDto();
                    model = Mapper.Map<Menu,MenuDto>(p);
                    GetChildMenu(Menu.ToList(),p.ID,model,true);
                    list.Add(model);
                });
            return list;
        }


        /// <summary>
        /// 根据部门，角色查询菜单
        /// </summary>
        /// <param name="departmentId"></param>
        /// <param name="roleList"></param>
        /// <returns></returns>
        public List<MenuDto> GetListByDepartmentIDAndRole(Guid departmentId, List<AccountOfRole> roleList)
        {
            List<MenuDto> list = new List<MenuDto>();
            var Menu = from m in _MenuRepository.Table.ToList()
                       join p in _permissionRepository.Table on new { Id = m.ID, DepartmentID = departmentId } equals new { Id = p.MenuID, DepartmentID = p.DepartmentID } into temp
                       from p in temp.ToList()
                           //join ar in _accountOfRolesRepository.Table on p.RoleID equals ar.RoleID
                       join r in roleList on p.RoleID equals r.RoleID
                       where m.IsUse == true
                       select m;
            Menu.Where(p => p.ParentID == new Guid()).OrderBy(p => p.Priority).Distinct().ToList().ForEach(
                p=> {
                    MenuDto model = new MenuDto();
                    model = Mapper.Map<Menu,MenuDto>(p);
                    GetChildMenu(Menu.ToList(),p.ID,model);
                    list.Add(model);
                });

            return list;
        }

        /// <summary>
        /// 根据部门，角色查询菜单（APP）
        /// </summary>
        /// <param name="departmentId"></param>
        /// <param name="roleList"></param>
        /// <returns></returns>
        public List<Menu> GetListForAppByDepartmentIDAndRole(Guid departmentId, List<AccountOfRole> roleList)
        {
            var Menu = from m in _MenuRepository.Table.ToList()
                       join p in _permissionRepository.Table on new { Id = m.ID, DepartmentID = departmentId } equals new { Id = p.MenuID, DepartmentID = p.DepartmentID } into temp
                       from p in temp.ToList()
                           //join ar in _accountOfRolesRepository.Table on p.RoleID equals ar.RoleID
                       join r in roleList on p.RoleID equals r.RoleID
                       where m.IsUse == true
                       select m;
            return Menu.ToList();
        }


        /// <summary>
        /// 根据部门，角色查询菜单
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public List<MenuDto> GetMenuByRole(AccountDto account)
        {
            List<MenuDto> list = new List<MenuDto>();
            var query = from a in _MenuRepository.Table
                        join b in _permissionRepository.Table on a.ID equals b.MenuID
                        join c in _accountOfRolesRepository.Table on b.RoleID equals c.RoleID
                        where a.IsUse == true
                        select new { a, b, c };
            if (account.IsAdmin)
            {
                var Menu = query.Select(x => x.a).ToList();
                Menu.Where(p => p.ParentID == new Guid()).ToList().ForEach(p =>
                {
                    MenuDto model = new MenuDto();
                    GetChildMenu(Menu, p.ID, model);
                    list.Add(model);
                });
            }
            else {
                var Menu = (from a in query
                            join b in account.Roles on a.b.RoleID equals b.ID
                            where a.b.DepartmentID == account.DepartmentID
                            select a.a).ToList();
                Menu.Where(p => p.ParentID == new Guid()).ToList().ForEach(p=> {
                    MenuDto model = new MenuDto();
                    GetChildMenu(Menu,p.ID,model);
                    list.Add(model);
                });
            }
            return list;
        }


        /// <summary>
        /// 整合菜单
        /// </summary>
        /// <param name="list">菜单集合</param>
        /// <param name="id">菜单ID</param>
        /// <param name="menus">菜单</param>
        /// <param name="removeUrl"></param>
        public void GetChildMenu(List<Menu> list,Guid id,MenuDto menus,bool removeUrl = false) {
            var model = list.Where(p=>p.ParentID==id).OrderBy(p=>p.Priority).Distinct();
            foreach (var item in model) {
                MenuDto child = new MenuDto();
                child = Mapper.Map<Menu,MenuDto>(item);
                if (removeUrl)
                    child.URL = null;
                menus.Children.Add(child);
                GetChildMenu(list,child.ID,child,removeUrl);
            }

        }

    }
}
