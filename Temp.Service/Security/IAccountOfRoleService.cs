﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Data.Entity;
using Temp.Service.Common;

namespace Temp.Service.Security
{
    public interface IAccountOfRoleService:IService<AccountOfRole>
    {
        bool Assign(Guid accountId,string rolesId);
    }
}
