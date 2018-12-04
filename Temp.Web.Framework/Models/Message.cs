using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Web.Framework.Models
{
    public class Message
    {
        public int status { get; set; }
        public string message { get; set; }
        public object data { get; set; }
        public string token { get; set; }
    }

    public class DropDownList
    {
        public string value { get; set; }
        public string text { get; set; }
        public string text2 { get; set; }
        //public string parent { get; set; }
        //public string group { get; set; }
        //public string type { get; set; }

    }
}
