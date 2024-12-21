using System;
using System.ComponentModel.DataAnnotations;

namespace Inva.LawMax.Hearings
{
    public class CreateUpdateHearingDto
    {
        public DateTime Date { get; set; }

        public string Decision { get; set; }

        public int CaseId { get; set; }
    }
}
