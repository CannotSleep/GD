using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Web.Framework.Models
{
    public class DepartmentTree
    {
        public Guid id { get; set; }
        public string name { get; set; }
        public List<DepartmentTree> children { get; set; }
    }
}
