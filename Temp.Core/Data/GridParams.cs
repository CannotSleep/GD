using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Core.Data
{
    public class GridParams
    {

        /// <summary>
        /// 当前页码
        /// </summary>
        /// <remarks></remarks>

        public int PageIndex;
        /// <summary>
        /// 每页数据量
        /// </summary>
        /// <remarks></remarks>

        public int PageSize;
        /// <summary>
        /// 排序方向（正序，反序）
        /// </summary>
        /// <remarks></remarks>

        public string SortDirection;
        /// <summary>
        /// 排序字段
        /// </summary>
        /// <remarks></remarks>

        public string SortField;

        public int TotalCount;

        public int TotalPage;


        public List<GridColumn> Columns;

        public GridParams()
        {
            PageIndex = 1;
            PageSize = 100;
        }

    }
}
