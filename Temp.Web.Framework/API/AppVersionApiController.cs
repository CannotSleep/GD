using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Web.Framework.API
{
    public class AppVersionApiController
    {
        private IAppVersionService _appService = IocObjectManager.GetInstance().Resolve<IAppVersionService>();


        [Route("api/AppUpdate/Check")]
        [HttpPost]
        public JsonResult<Message> Check()
        {
            HttpContext context = HttpContext.Current;
            Message message = new Message();

            AppVersionControl model = new AppVersionControl();
            model = HttpRequestHelper.ConverJsonToModel<AppVersionControl>(context);

            var list = _appService.GetLastVersion(model.Appid);
            if (list != null && list.Count() > 0)
            {
                if (model.Version.Equals(list[0].Version))
                {
                    message.status = (int)MessageStatus.fail;
                    message.data = null;
                }
                else
                {
                    message.status = (int)MessageStatus.success;
                    message.data = list[0];
                }
            }
            message.message = "数据获取成功!";
            message.token = null;
            return JsonResult(message);
        }
    }
}
