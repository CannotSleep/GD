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
    // tbLOG_ErrorInfo
    public partial class ErrorInfo: BaseEntity
    {
        public int ID { get; set; } // ID (Primary key)

        ///<summary>
        /// 用户ID
        ///</summary>
        public string UID { get; set; } // UID

        ///<summary>
        /// 错误代码
        ///</summary>
        public int ErrorCode { get; set; } // ErrorCode

        ///<summary>
        /// 错误信息
        ///</summary>
        public string ErrorMsg { get; set; } // ErrorMsg

        ///<summary>
        /// 发生时间
        ///</summary>
        public DateTime RunningTime { get; set; } // RunningTime

        ///<summary>
        /// 程序ID
        ///</summary>
        public string ProgramID { get; set; } // ProgramID

        ///<summary>
        /// 地址
        ///</summary>
        public string Url { get; set; } // Url

        ///<summary>
        /// 数据库执行语句
        ///</summary>
        public string ExecSql { get; set; } // ExecSql

        ///<summary>
        /// 堆栈
        ///</summary>
        public string StackTrace { get; set; } // StackTrace

        ///<summary>
        /// 解决人
        ///</summary>
        public string SolveBy { get; set; } // SolveBy
        
        public ErrorInfo()
        {
            UID = "0";
            ErrorCode = 0;
            ErrorMsg = "0";
            ProgramID = "0";
            Url = "0";
            ExecSql = "0";
            StackTrace = "0";
            SolveBy = "0";
            InitializePartial();
        }

        partial void InitializePartial();
    }

}
// </auto-generated>
