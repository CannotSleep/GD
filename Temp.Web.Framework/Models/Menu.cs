using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Web.Framework.Models
{
    public class MenuTree
    {
        public Guid id { get; set; }
        public string name { get; set; }
        public string icon { get; set; }
        public string href { get; set; }
        public List<MenuTree> children { get; set; }
        public string title { get; set; }
        public string appTitle { get; set; }
    }

    public class MenuTreeGrid {
        public Guid id { get; set; }
        public Guid pid { get; set; }
        public string name { get; set; }
        public string icon { get; set; }
        public string href { get; set; }
        public bool check { get; set; }
        public string title { get; set; }
    }

}
