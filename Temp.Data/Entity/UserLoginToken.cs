// <auto-generated>
// ReSharper disable RedundantUsingDirective
// ReSharper disable DoNotCallOverridableMethodsInConstructor
// ReSharper disable InconsistentNaming
// ReSharper disable PartialTypeWithSinglePart
// ReSharper disable PartialMethodWithSinglePart
// ReSharper disable RedundantNameQualifier
// TargetFrameworkVersion = 4.0
#pragma warning disable 1591    //  Ignore "Missing XML Comment" warning

using System;
using Temp.Core.Data;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Data.Entity.Infrastructure;
using System.Linq.Expressions;
using System.Data.Entity;
using System.Data;
using System.Data.Entity.Core.Objects;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Data.Entity.ModelConfiguration;
using DatabaseGeneratedOption = System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption;

namespace Temp.Data.Entity
{
    // tbLOG_UserLoginToken
    public partial class UserLoginToken: BaseEntity
    {
        public Guid ID { get; set; } // ID (Primary key)

        ///<summary>
        /// 登录时间
        ///</summary>
        public DateTime LoginTime { get; set; } // LoginTime

        ///<summary>
        /// 登录IP
        ///</summary>
        public string LoginIP { get; set; } // LoginIP

        ///<summary>
        /// 登录设备
        ///</summary>
        public int LoginDevice { get; set; } // LoginDevice

        ///<summary>
        /// 用户ID
        ///</summary>
        public Guid AccountID { get; set; } // AccountID
        public string Token { get; set; } // Token
        public string TokenID { get; set; } // TokenID
        
        public UserLoginToken()
        {
            LoginTime = System.DateTime.Now;
            LoginIP = "0";
            LoginDevice = 0;
            AccountID = Guid.Parse("00000000-0000-0000-0000-000000000000");
            Token = "0";
            TokenID = "0";
            InitializePartial();
        }

        partial void InitializePartial();
    }

}
// </auto-generated>
