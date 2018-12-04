using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Web.Framework.Models
{
    public class RoleOperate
    {
        /// <summary>
        /// 角色ID
        /// </summary>
        public Guid ID { get; set; }

        /// <summary>
        /// 角色名称
        /// </summary>
        [StringLength(20,ErrorMessage = "最多只能输入20个字符")]
        [Required(ErrorMessage="必填")]
        public string Name { get; set; }


        /// <summary>
        /// 是否启用
        /// </summary>
        [Required(ErrorMessage ="必填")]
        public bool IsUse { get; set; }

        /// <summary>
        /// 说明
        /// </summary>
        [Required(ErrorMessage ="必填")]
        public string Remark { get; set; }

        public RoleOperate() {
            Name = "";
            IsUse = true;
            ID = Guid.NewGuid();
        }
    }
}
