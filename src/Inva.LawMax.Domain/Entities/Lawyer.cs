using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Inva.LawMax.LawCases
{
    public class Lawyer : FullAuditedAggregateRoot<int>,IMultiTenant
    {
        public string Name { get; set; }
        public string Position { get; set; }
        public string Mobile { get; set; }
        public string Address { get; set; }
       
        public ICollection<CaseLawyer> CaseLawyers { get; set; }

        public Guid? TenantId { get; set; }
    }
}
