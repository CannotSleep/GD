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
    public partial class UserLoginTokenConfiguration : EntityTypeConfiguration<UserLoginToken>
    {
        public UserLoginTokenConfiguration()
            : this("dbo")
        {
        }
 
        public UserLoginTokenConfiguration(string schema)
        {
            ToTable(schema + ".tbLOG_UserLoginToken");
            HasKey(x => x.ID);

            Property(x => x.ID).HasColumnName("ID").IsRequired().HasColumnType("uniqueidentifier").HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);
            Property(x => x.LoginTime).HasColumnName("LoginTime").IsRequired().HasColumnType("datetime");
            Property(x => x.LoginIP).HasColumnName("LoginIP").IsRequired().HasColumnType("nvarchar").HasMaxLength(200);
            Property(x => x.LoginDevice).HasColumnName("LoginDevice").IsRequired().HasColumnType("int");
            Property(x => x.AccountID).HasColumnName("AccountID").IsRequired().HasColumnType("uniqueidentifier");
            Property(x => x.Token).HasColumnName("Token").IsRequired().HasColumnType("nvarchar").HasMaxLength(200);
            Property(x => x.TokenID).HasColumnName("TokenID").IsRequired().HasColumnType("nvarchar").HasMaxLength(200);
            InitializePartial();
        }
        partial void InitializePartial();
    }

}
// </auto-generated>
