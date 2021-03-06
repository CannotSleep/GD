﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Core.Data;
using Temp.Data;
using Temp.Data.Entity;

namespace Temp.Service.Common
{
    ///<summary>
    ///操作错误表
    ///</summary>
    public partial class ErrorInfoService : IErrorInfoService
    {
        IRepository<ErrorInfo> _errorInfoRepository;

        public IRepository<ErrorInfo> UseRepository
        {
            get
            {
                return _errorInfoRepository;
            }

        }

        public ErrorInfoService()
            : this(RepositoryFactory.Create<ErrorInfo>())
        {
        }

        public ErrorInfoService(IRepository<ErrorInfo> errorInfoRepository)
        {
            _errorInfoRepository = errorInfoRepository;
        }
    }
}
