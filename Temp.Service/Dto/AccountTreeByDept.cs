using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Service.Dto
{
    public class AccountTreeByDept
    {
        public Guid ID { get; set; }

        public string Name { get; set; }

        public Guid ParentID { get; set; }

        public AccountTree Acount { get; set; }

        public List<AccountTreeByDept> children { get; set; }
    }

    public class AccountTree {
        public Guid ID { get; set; }

        public string Name { get; set; }

        public Guid Department { get; set; }
    }
}
