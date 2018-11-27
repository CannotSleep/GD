using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Core
{
    public class ResultInfo
    {
        /// <summary>
        /// 错误码
        /// </summary>
        /// <remarks></remarks>

        public int ErrorNo;
        /// <summary>
        /// 错误信息
        /// </summary>
        /// <remarks></remarks>

        public string ErrorMsg;
        /// <summary>
        /// 错误信息反馈表
        /// </summary>
        /// <remarks></remarks>

        public DataTable ErrorTable;
    }
}
