using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace Inva.LawMax.LawCases
{
    public class CaseLawyer : FullAuditedAggregateRoot<int>
    {
        [ForeignKey(nameof(Case))]
        public int CaseId { get; set; } 
        public Case Case { get; set; } 

        [ForeignKey(nameof(Lawyer))]
        public int LawyerId { get; set; } 
        public Lawyer Lawyer { get; set; } 
    }
}
