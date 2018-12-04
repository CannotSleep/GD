using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Data.Entity;
using Temp.Service.Common;
using Temp.Service.Dto;

namespace Temp.Service.Security
{
    public interface IAccountService:IService<Account>
    {
        AccountDto GetAccountInfo(Guid id);
    }
}
