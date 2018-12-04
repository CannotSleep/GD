using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Temp.Core.Dependency;
using Temp.Service.Common;

namespace Temp.Web.Framework.Core
{
    public class DropDownListOption
    {
        public String RefTable { get; set; }
        public String OptionLabel { get; set; }
        public FromWayEnum FromWay { get; set; }
        public string TextField { get; set; }
        public string ValueField { get; set; }
        public string SelectValue { get; set; }
        public string Where { get; set; }
    }


    /// <summary>
    /// 扩充MVC的Html方法，用于适配Tmp的view相关控件展示
    /// 加入where筛选条件，lbw 2018-05-28
    /// </summary>
    public static class MvcHtmlExtensions
    {

        public static MvcHtmlString DropDownListFor<TModel, TProperty>(
            this HtmlHelper<TModel> htmlHelper,
            Expression<Func<TModel, TProperty>> expression,
            DropDownListOption option,
            IDictionary<string, object> htmlAttributes)
        {

            var codeTableService = IocObjectManager.GetInstance().Resolve<ICodeTableService>();

            var codeTableList = option.FromWay ==
                FromWayEnum.FromGeneralTable ? codeTableService.GetGeneralTable(
                    new CodeTableDto()
                    {
                        TableName = option.RefTable,
                        TextField = option.TextField,
                        ValueField = option.ValueField,
                        Where = string.IsNullOrWhiteSpace(option.Where) ? "" : option.Where
                    }
                ) :
                codeTableService.GetCodeTable(new CodeTableDto() { TableName = option.RefTable, Where = string.IsNullOrWhiteSpace(option.Where) ? "" : option.Where })
                ;

            var list = (from u in codeTableList
                        select new SelectListItem() { Text = u.text, Value = u.id, Selected = option.SelectValue == u.id ? true : false }).ToList();

            return htmlHelper.DropDownListFor(expression, list, option.OptionLabel, htmlAttributes);
        }

        //todo

        /// <summary>
        /// 注意htmlAttributes请务必加入name关键字
        /// </summary>
        /// <typeparam name="TModel"></typeparam>
        /// <param name="htmlHelper"></param>
        /// <param name="option"></param>
        /// <param name="htmlAttributes"></param>
        /// <returns></returns>
        public static MvcHtmlString DropDownList<TModel>(
            this HtmlHelper<TModel> htmlHelper,
            DropDownListOption option,
            IDictionary<string, object> htmlAttributes)
        {
            var codeTableService = IocObjectManager.GetInstance().Resolve<ICodeTableService>();

            var codeTableList = option.FromWay ==
                FromWayEnum.FromGeneralTable ? codeTableService.GetGeneralTable(
                    new CodeTableDto()
                    {
                        TableName = option.RefTable,
                        TextField = option.TextField,
                        ValueField = option.ValueField,
                        Where = string.IsNullOrWhiteSpace(option.Where) ? "" : option.Where
                    }
                ) :
                codeTableService.GetCodeTable(new CodeTableDto() { TableName = option.RefTable, Where = string.IsNullOrWhiteSpace(option.Where) ? "" : option.Where })
                ;

            var list = (from u in codeTableList
                        select new SelectListItem() { Text = u.text, Value = u.id, Selected = option.SelectValue == u.id ? true : false }).ToList();

            return htmlHelper.DropDownList(htmlAttributes["name"].ToString(), list, option.OptionLabel, htmlAttributes);
        }
    }
}
