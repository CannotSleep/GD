using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Service.Common
{
    public interface IVersionControlService : IService<VersionControl>
    {
        bool GetVersionFlag(string key);
    }
}
