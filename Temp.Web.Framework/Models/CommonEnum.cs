using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Web.Framework.Models
{
    class CommonEnum
    {
    }

    public enum LoginDevice : int { websystem,app}
    public enum MessageStatus : int { fail,success,servererror,tokenfail}

}
