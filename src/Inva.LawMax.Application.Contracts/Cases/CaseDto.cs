using Inva.LawMax.Hearings;
using Inva.LawMax.Lawyers;
using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace Inva.LawMax.Cases
{
    public class CaseDto : AuditedEntityDto<int>
    {
        public string Number { get; set; }
        public int Year { get; set; }
        public string LitigationDegree { get; set; }
        public string FinalVerdict { get; set; }

        public List<LawyerDto> Lawyers { get; set; } = new List<LawyerDto>();
        public List<HearingDto> Hearings { get; set; } = new List<HearingDto>();
    }
    public class CaseListDto
    {
        public int Id { get; set; }
        public string Number { get; set; }
    }
}
