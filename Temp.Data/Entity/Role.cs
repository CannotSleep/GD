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
    // tbLOG_Role
    public partial class Role: BaseEntity
    {

        ///<summary>
        /// 角色ID
        ///</summary>
        public Guid ID { get; set; } // ID (Primary key)

        ///<summary>
        /// 角色名称
        ///</summary>
        public string Name { get; set; } // Name

        ///<summary>
        /// 是否启用
        ///</summary>
        public bool IsUse { get; set; } // IsUse

        ///<summary>
        /// 说明
        ///</summary>
        public string Remark { get; set; } // Remark
        
        public Role()
        {
            ID = System.Guid.NewGuid();
            Name = "";
            IsUse = false;
            Remark = "";
            InitializePartial();
        }

        partial void InitializePartial();
    }

}
// </auto-generated>
