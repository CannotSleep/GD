using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Service.Dto
{
    public class AccountOfRoleSearchDto
    {
        public Guid ID { get; set; }

        /// <summary>
        /// 用户唯一标识
        /// </summary>
        public Guid AccountID { get; set; }

        /// <summary>
        /// 角色ID
        /// </summary>
        public Guid RoleID { get; set;}

        /// <summary>
        /// 是否启用
        /// </summary>
        public bool IsUse { get; set; }

        /// <summary>
        /// 用户账号
        /// </summary>
        public string AccountNumber { get; set; }

        /// <summary>
        /// 用户名
        /// </summary>
        public string AccountName { get; set; }

        /// <summary>
        /// 角色名
        /// </summary>
        public string RoleName { get; set; }
    }
}
