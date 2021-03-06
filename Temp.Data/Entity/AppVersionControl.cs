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
    // tbCOM_AppVersionControl
    public partial class AppVersionControl: BaseEntity
    {
        public int ID { get; set; } // ID (Primary key)
        public string Appid { get; set; } // Appid

        ///<summary>
        /// 版本
        ///</summary>
        public string Version { get; set; } // Version

        ///<summary>
        /// 更新说明
        ///</summary>
        public string Note { get; set; } // Note

        ///<summary>
        /// 安卓更新地址
        ///</summary>
        public string AndroidUpdateUrl { get; set; } // AndroidUpdateUrl

        ///<summary>
        /// Ios更新地址
        ///</summary>
        public string IosUpdateUrl { get; set; } // IosUpdateUrl

        ///<summary>
        /// 更新时间
        ///</summary>
        public DateTime? UpdateTime { get; set; } // UpdateTime
        
        public AppVersionControl()
        {
            InitializePartial();
        }

        partial void InitializePartial();
    }

}
// </auto-generated>
