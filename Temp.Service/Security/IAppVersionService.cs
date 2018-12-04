using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Core.Data;
using Temp.Data.Entity;
using Temp.Service.Common;

namespace Temp.Service.Security
{
    public interface IAppVersionService:IService<AppVersionControl>
    {
        List<AppVersionControl> GetLastVersion(string appid);

        List<AppVersionControl> Search(ref GridParams gridParams);

    }
}
