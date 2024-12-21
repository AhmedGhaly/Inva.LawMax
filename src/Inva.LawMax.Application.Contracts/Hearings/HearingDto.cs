using System;
using Volo.Abp.Application.Dtos;

namespace Inva.LawMax.Hearings
{
    public class HearingDto : AuditedEntityDto<int>
    {
        public DateTime Date { get; set; }
        public string Decision { get; set; }
        public string CaseNumber { get; set; }
        public int CaseId { get; set; }
    }
}
