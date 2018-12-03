using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Service.Dto
{
    public class MenuDto
    {
        public MenuDto() {
            Children = new List<MenuDto>();
        }

        public Guid ID { get; set; }//ID (Primart key)

        /// <summary>
        /// 父菜单ID
        /// </summary>
        public Guid ParentID { get; set; }

        /// <summary>
        /// 部门名称
        /// </summary>
        public string Name { get; set; }


        /// <summary>
        /// 菜单地址
        /// </summary>
        public string URL { get; set; }

        /// <summary>
        /// 优先级
        /// </summary>
        public int Priority { get; set; }

        /// <summary>
        /// 是否启用
        /// </summary>
        public bool IsUse { get; set; }
        public string Icon { get; set; }

        public bool IsChecked { get; set; }

        /// <summary>
        /// 子集
        /// </summary>
        public List<MenuDto> Children { get; set; }

        /// <summary>
        /// APP菜单名
        /// </summary>
        public string AppTitle { get; set; }
    }
}
