using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Data.Entity;

namespace Temp.Service.Dto
{
    public class AccountDto
    {
        /// <summary>
        /// 全局唯一标识
        /// </summary>
        public Guid ID { get; set; }

        /// <summary>
        /// 用户ID
        /// </summary>
        public string AccountID { get; set; }

        /// <summary>
        /// 用户名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 部门ID
        /// </summary>
        public Guid DepartmentID { get; set; }

        /// <summary>
        /// 部门名称
        /// </summary>
        public string DepartmentName { get; set;}


        /// <summary>
        /// 角色
        /// </summary>
        public List<Role> Roles { get; set; }

        /// <summary>
        /// 是否拥有超级管理员角色
        /// </summary>
        public bool IsAdmin { get; set; }

        /// <summary>
        /// 域
        /// </summary>
        public short Domain { get; set; }

        /// <summary>
        /// 是否启用
        /// </summary>
        public bool IsUse { get; set; }

        /// <summary>
        /// 部门类型
        /// </summary>
        public int DepartmentType { get; set; }

        /// <summary>
        /// 角色ID,多个用逗号隔开
        /// </summary>
        public string RolesID { get; set; }

        /// <summary>
        /// 角色名称,多个用逗号隔开
        /// </summary>
        public string RolesName { get; set; }
    }
}
