using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Inva.LawMax.LawCases
{
    public class Case : FullAuditedAggregateRoot<int>, IMultiTenant
    {
        public string Number { get; set; }
        public int Year { get; set; }
        public string LitigationDegree { get; set; }
        public string FinalVerdict { get; set; }
        [JsonIgnore]
        public ICollection<CaseLawyer> CaseLawyers { get; set; }
        public ICollection<Hearing> Hearings { get; set; }
        public Guid? TenantId { get; set; }


    }

}

