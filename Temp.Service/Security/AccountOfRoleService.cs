using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temp.Core.Data;
using Temp.Data;
using Temp.Data.Entity;
using System.Transactions;
using System.Data.SqlClient;
using System.Data;

namespace Temp.Service.Security
{
    public partial class AccountOfRoleService
    {
        IRepository<AccountOfRole> _accountOfRoleRepository;

        public IRepository<AccountOfRole> UseRepository {
            get;set;
        }

        public AccountOfRoleService() : this(RepositoryFactory.Create<AccountOfRole>()) {

        }

        public AccountOfRoleService(IRepository<AccountOfRole> accountOfRoleRepository) {
            _accountOfRoleRepository = accountOfRoleRepository;
            UseRepository = accountOfRoleRepository;
        }

        public bool Assign(Guid accountId,string rolesId) {
            bool result = false;
            using (TransactionScope ts = new TransactionScope()) {
                try {
                    //先删除原有角色
                    var delStr = "DELETE FROM tbLOG_AccountOfRole WHERE AccountID=@AccountId";
                    SqlParameter[] parameters = {
                        new SqlParameter("@AccountId",SqlDbType.UniqueIdentifier)
                    };
                    parameters[0].Value = accountId;
                    DbHelperSql.ExecuteSql(DbHelperSql.DefaultUpdateConn,delStr,parameters);

                    //加入用户角色
                    List<string> roleList = new List<string>(rolesId.Split(new string[] { ","},StringSplitOptions
                        .RemoveEmptyEntries));
                    foreach (string r in roleList) {
                        var accountOfRole = new AccountOfRole();
                        accountOfRole.AccountID = accountId;
                        accountOfRole.ID = Guid.NewGuid();
                        accountOfRole.RoleID = Guid.Parse(r);
                        accountOfRole.IsUse = true;
                        _accountOfRoleRepository.Insert(accountOfRole);
                    }
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
