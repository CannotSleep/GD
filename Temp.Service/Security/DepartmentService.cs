using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Core.Data;
using Temp.Data;
using Temp.Data.Entity;
using Temp.Service.Dto;

namespace Temp.Service.Security
{
    public partial class DepartmentService:IDepartmentService
    {
        IRepository<Department> _departmentRepository;

        public IRepository<Department> UseRepository
        {
            get; set;
        }

        public DepartmentService() : this(RepositoryFactory.Create<Department>())
        {

        }

        public DepartmentService(IRepository<Department> departmentRepository)
        {
            _departmentRepository = departmentRepository;
            UseRepository = departmentRepository;
        }

        /// <summary>
        /// 根据用户查找有权限的部门
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public IQueryable<Department> FilterByAccount(AccountDto account)
        {
            var query = from p in _departmentRepository.Table where p.IsUse == true select p;
            if (account.Domain == 0) //查看全部
                return query;
            else if (account.DepartmentType == 0)//查看当前域-所有公司
                return query.Where(a => a.Domain == account.Domain);
            else //查询子公司所有
            {
                query = query.Where(a=>a.Domain == account.Domain && a.Type != 0 && (a.Type==account.DepartmentType || a.Type == account.DepartmentType/1000 || a.Type/1000 == account.DepartmentType));
                //查询项目的 type =-1
                var query2 = from p in _departmentRepository.Table
                             join q in query on p.ID equals q.ParentID
                             where p.IsUse == true && p.Type == -1
                             select p;
                return query.Concat(query2);
            }
        }
    }
}
