using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;

namespace Inva.LawMax.Cases
{
    public class CreateUpdateCaseDto
    {
        [Required]
        [StringLength(32)]
        public string Number { get; set; }

        [Required]
        public int Year { get; set; }

        [Required]
        [StringLength(64)]
        public string LitigationDegree { get; set; }

        [StringLength(128)]
        public string FinalVerdict { get; set; }
        public List<int> LawyerIds { get; set; } = new List<int>();
    }
}
