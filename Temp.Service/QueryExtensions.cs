using System;
using System.Linq;
using System.Linq.Expressions;
using Temp.Core.Data;
using System.Collections.Generic;

namespace Tmp.Service.Extension
{
    public static class QueryExtensions
    {
        public static IQueryable<T> SortBy<T>(this IQueryable<T> source, string sortExpression)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            string sortDirection = String.Empty;
            string propertyName = String.Empty;

            sortExpression = sortExpression.Trim();
            int spaceIndex = sortExpression.Trim().IndexOf(" ");
            if (spaceIndex < 0)
            {
                propertyName = sortExpression;
                sortDirection = "ASC";
            }
            else
            {
                propertyName = sortExpression.Substring(0, spaceIndex);
                sortDirection = sortExpression.Substring(spaceIndex + 1).Trim();
            }

            if (String.IsNullOrEmpty(propertyName))
            {
                return source;
            }

            ParameterExpression parameter = Expression.Parameter(source.ElementType, String.Empty);
            MemberExpression property = Expression.Property(parameter, propertyName);
            LambdaExpression lambda = Expression.Lambda(property, parameter);

            string methodName = (sortDirection.ToUpper() == "ASC") ? "OrderBy" : "OrderByDescending";

            Expression methodCallExpression = Expression.Call(typeof(Queryable), methodName,
                                                new Type[] { source.ElementType, property.Type },
                                                source.Expression, Expression.Quote(lambda));

            return source.Provider.CreateQuery<T>(methodCallExpression);
        }


        public static IQueryable<T> Sort<T>(IQueryable<T> q, GridParams grid)
        {
            return q.SortBy(grid.SortField + " " + grid.SortDirection);
        }

        public static IQueryable<T> SortAndPage<T>(IQueryable<T> q, GridParams grid)
        {
            return Sort(q, grid).Skip((grid.PageIndex - 1) * grid.PageSize).Take(grid.PageSize);
        }


        /// <summary>
        /// 仅分页，不排序；add by lbw 2018-06-04
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="q"></param>
        /// <param name="grid"></param>
        /// <returns></returns>
        public static List<T> Paging<T>(IQueryable<T> q, GridParams grid)
        {
            return q.Skip((grid.PageIndex - 1) * grid.PageSize).Take(grid.PageSize).ToList();
        }
    }
}
