using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Inva.LawMax.LawCases
{
    public class Hearing : FullAuditedAggregateRoot<int>, IMultiTenant
    {
        public DateTime Date { get; set; }
        public string Decision { get; set; }
        public int CaseId { get; set; }
        public Case Case { get; set; }
        public Guid? TenantId { get; set; }

    }
}
