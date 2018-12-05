using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Data.Entity;
using Temp.Service.Common;
using Temp.Service.Dto;

namespace Temp.Service.Security
{
    public interface IMenuService:IService<Menu>
    {

        /// <summary>
        /// 根据部门，角色查询菜单
        /// </summary>
        /// <param name="departmentId"></param>
        /// <param name="roleList"></param>
        /// <returns></returns>
        List<MenuDto> GetListByDepartmentIDAndRole(Guid departmentId,List<AccountOfRole> roleList);
        List<MenuDto> GetMenuByRole(AccountDto account);

        /// <summary>
        /// 查询所有菜单
        /// </summary>
        /// <param name="needValid"></param>
        /// <returns></returns>
        List<MenuDto> GetAllList(bool needValid = false);

        /// <summary>
        /// 根据部门，角色查询菜单(App)
        /// </summary>
        /// <param name="departmentId"></param>
        /// <param name="roleList"></param>
        /// <returns></returns>
        List<Menu> GetListForAppByDepartmentIDAndRole(Guid departmentId, List<AccountOfRole> roleList);

    }
}
