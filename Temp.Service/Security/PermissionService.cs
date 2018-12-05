using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;
using Temp.Core.Data;
using Temp.Data;
using Temp.Data.Entity;

namespace Temp.Service.Security
{
    public partial class PermissionService:IPermissionService
    {
        IRepository<Permission> _permissionRepository;

        public IRepository<Permission> UseRepository
        {
            get; set;
        }

        public PermissionService() : this(RepositoryFactory.Create<Permission>())
        {

        }

        public PermissionService(IRepository<Permission> permissionRepository)
        {
            _permissionRepository = permissionRepository;
            UseRepository = permissionRepository;
        }


        public bool Assign(string menusId, List<Guid> departmentId, string roleList)
        {
            bool res = false;
            try {
                List<string> roles = new List<string>(roleList.Split(','));
                foreach (var d in departmentId) {
                    //先删除原有权限
                    var delStr = "DELETE FROM tbLOG_Permission WHERE DepartmentID=@DepartmentId and MenuID=@MenusId";
                    SqlParameter[] paramters = {
                        new SqlParameter("@DepartmentId",SqlDbType.UniqueIdentifier),
                        new SqlParameter("@MenusId",SqlDbType.UniqueIdentifier)
                    };
                    paramters[0].Value = d;
                    paramters[1].Value = Guid.Parse(menusId);
                    DbHelperSql.ExecuteSql(DbHelperSql.DefaultUpdateConn,delStr,paramters);
                    foreach (var item in roles) {
                        Permission model = new Permission()
                        {
                            ID = Guid.NewGuid(),
                            MenuID = Guid.Parse(menusId),
                            DepartmentID = d,
                            RoleID = Guid.Parse(item)
                        };
                        _permissionRepository.Insert(model);
                       
                    }
                }
                res = true;
            }
            catch (Exception e) {
                res = false;
            }
            return res;
        }

        public bool AssignSimplify(Guid RefDepartmentID, Guid DepartmentID)
        {
            bool result = false;
            using (TransactionScope ts = new TransactionScope()) {
                try {
                    //先删除原有权限
                    var delStr = "DELETE FROM tbLOG_Permission WHERE DepartmentID=@DepartmentId";
                    SqlParameter[] paramters = {
                        new SqlParameter("@DepartmentId",SqlDbType.UniqueIdentifier),
                    };
                    paramters[0].Value = DepartmentID;
                    DbHelperSql.ExecuteSql(DbHelperSql.DefaultUpdateConn, delStr, paramters);


                    //加入同权限部门
                    var addStr = "INSERT INTO tbLOG_Permission(ID,MenuID,RoleID,DepartmentID) SELECT NEWID(),MenuID,RoleID,@DepartmentId FROM tbLOG_Permission" +
                        "WHERE DepartmentID=@RefDepartmentId";
                    SqlParameter[] parameters2 = {
                        new SqlParameter("@DepartmentId",SqlDbType.UniqueIdentifier),
                        new SqlParameter("@RefDepartmentId",SqlDbType.UniqueIdentifier)
                    };
                    parameters2[0].Value = DepartmentID;
                    parameters2[1].Value = RefDepartmentID;
                    DbHelperSql.ExecuteSql(DbHelperSql.DefaultUpdateConn,addStr,parameters2);
                    ts.Complete();
                    result = true;
                }
                catch (Exception e) {
                    result = false;
                }

            }
            return result;
        }
    }
}
