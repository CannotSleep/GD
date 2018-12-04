using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Web.Framework.Models
{
    public class AccountOperate
    {
        /// <summary>
        /// 全局唯一标识
        /// </summary>
        [Key]
        public Guid ID { get; set; }


        /// <summary>
        /// 用户ID
        /// </summary>
        [StringLength(20,ErrorMessage ="最多只能输入20个字符")]
        [Required(ErrorMessage ="必填")]
        public string AccountID { get; set; }

        /// <summary>
        /// 用户名称
        /// </summary>
        [StringLength(20, ErrorMessage = "最多只能输入20个字符")]
        [Required(ErrorMessage = "必填")]
        public string Name { get; set; }


        /// <summary>
        /// 用户密码
        /// </summary>
        ///[StringLength(16,MinimumLength =6,ErrorMessage ="密码长度为6~16")]
        [DataType(DataType.Password)]
        [Required(ErrorMessage = "必填")]
        public string Password { get; set; }


        [DataType(DataType.Password)]
        [Required(ErrorMessage = "必填")]
        [Compare("Password",ErrorMessage ="密码要一致")]
        public string RptPassword { get; set; }

        /// <summary>
        /// 部门ID
        /// </summary>
        [Required(ErrorMessage = "必填")]
        public Guid Department { get; set; }

        /// <summary>
        /// 角色ID
        /// </summary>
        [Required(ErrorMessage = "必填")]
        public string RolesID { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreateTime { get; set;}


        /// <summary>
        /// 有效期
        /// </summary>
        public DateTime ExpireDate { get; set; }

        /// <summary>
        /// 编辑时间
        /// </summary>
        public DateTime UpdateTime { get; set; }

        /// <summary>
        /// 头像
        /// </summary>
        public string Img { get; set; }

        /// <summary>
        /// 是否启用
        /// </summary>
        public bool IsUse { get; set; }


        public AccountOperate() {
            ID = Guid.NewGuid();
            AccountID = "";
            Name = "";
            //DepartmentsID=0;
            CreateTime = System.DateTime.Now;
            UpdateTime = System.DateTime.Now;
            IsUse = true;
            Img = "";
            Password = "123456";
            RptPassword = "123456";
        }
    }

    public class LoginModel {


        /// <summary>
        /// 用户ID
        /// </summary>
        [Required(ErrorMessage = "请输入账号")]
        public string AccountID { get; set; }


        /// <summary>
        /// 用户密码
        /// </summary>
        [Required(ErrorMessage = "请输入密码")]
        public string Password { get; set; }


        /// <summary>
        /// 验证码
        /// </summary>
        [Required(ErrorMessage = "请输入验证码")]
        public string CheckCode { get; set; }

        public LoginModel() {
            CheckCode = "";
        }

    }

    public class ChangeInfo {


        /// <summary>
        /// 全局唯一标识
        /// </summary>
        [Key]
        public Guid ID { get; set; }


        /// <summary>
        /// 用户ID
        /// </summary>
        [StringLength(20, ErrorMessage = "最多只能输入20个字符")]
        [Required(ErrorMessage = "必填")]
        public string AccountID { get; set; }


        /// <summary>
        /// 用户名称
        /// </summary>
        [StringLength(20, ErrorMessage = "最多只能输入20个字符")]
        [Required(ErrorMessage = "必填")]
        public string Name { get; set; }


        /// <summary>
        /// 用户密码
        /// </summary>
        [DataType(DataType.Password)]
        [Required(ErrorMessage ="必填")]
        [RegularExpression(@"^(?=,*?[a-z])(?=.*?[0-9])(?=.*?[_\-@@&=])[a-z0-9_\-@@&=]{6,16}$",ErrorMessage ="密码必须为6~16位包含字母、数字、特殊字符")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Required(ErrorMessage = "必填")]
        [Compare("Password", ErrorMessage = "密码要一致")]
        public string RptPassword { get; set; }

        /// <summary>
        /// 头像
        /// </summary>
        public string Img { get; set; }

    }

}
