using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using Temp.Web.Framework.Models;

namespace Temp.Web.Framework.API
{
    public class ErrorApiController:BaseApiController
    {

        /// <summary>
        /// 显示错误详情
        /// </summary>
        /// <returns></returns>
        [Route("api/ErrorApi/Detail")]
        [HttpGet]
        public JsonResult<Message> Detail() {
            Message message = new Message();
            message.message = "服务器出错";
            message.status = (int)MessageStatus.fail;
            return Json(message);
        }

    }
}
