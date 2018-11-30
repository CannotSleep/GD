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
    // tbLOG_Log
    public partial class LogConfiguration : EntityTypeConfiguration<Log>
    {
        public LogConfiguration()
            : this("dbo")
        {
        }
 
        public LogConfiguration(string schema)
        {
            ToTable(schema + ".tbLOG_Log");
            HasKey(x => x.ID);

            Property(x => x.ID).HasColumnName("ID").IsRequired().HasColumnType("int").HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property(x => x.Operate).HasColumnName("Operate").IsRequired().HasColumnType("nvarchar").HasMaxLength(200);
            Property(x => x.Data).HasColumnName("Data").IsRequired().HasColumnType("nvarchar");
            Property(x => x.Time).HasColumnName("Time").IsRequired().HasColumnType("datetime");
            InitializePartial();
        }
        partial void InitializePartial();
    }

}
// </auto-generated>