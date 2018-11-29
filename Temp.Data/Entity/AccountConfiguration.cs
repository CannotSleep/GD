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
    // tbLOG_Account
    public partial class AccountConfiguration : EntityTypeConfiguration<Account>
    {
        public AccountConfiguration()
            : this("dbo")
        {
        }
 
        public AccountConfiguration(string schema)
        {
            ToTable(schema + ".tbLOG_Account");
            HasKey(x => x.ID);

            Property(x => x.ID).HasColumnName("ID").IsRequired().HasColumnType("uniqueidentifier").HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);
            Property(x => x.AccountID).HasColumnName("AccountID").IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(50);
            Property(x => x.Name).HasColumnName("Name").IsRequired().HasColumnType("nvarchar").HasMaxLength(50);
            Property(x => x.Password).HasColumnName("Password").IsRequired().HasColumnType("nvarchar").HasMaxLength(50);
            Property(x => x.Sex).HasColumnName("Sex").IsRequired().HasColumnType("int");
            Property(x => x.Birthday).HasColumnName("Birthday").IsRequired().HasColumnType("date");
            Property(x => x.CreateTime).HasColumnName("CreateTime").IsRequired().HasColumnType("datetime");
            Property(x => x.UpdateTime).HasColumnName("UpdateTime").IsRequired().HasColumnType("datetime");
            Property(x => x.Position).HasColumnName("Position").IsRequired().HasColumnType("uniqueidentifier");
            Property(x => x.Img).HasColumnName("Img").IsRequired().HasColumnType("nvarchar");
            Property(x => x.Department).HasColumnName("Department").IsRequired().HasColumnType("uniqueidentifier");
            Property(x => x.IsUse).HasColumnName("IsUse").IsRequired().HasColumnType("bit");
            InitializePartial();
        }
        partial void InitializePartial();
    }

}
// </auto-generated>
