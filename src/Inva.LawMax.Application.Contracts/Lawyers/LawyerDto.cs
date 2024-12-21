using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace Inva.LawMax.Lawyers
{
    public class LawyerDto : AuditedEntityDto<int>
    {
        public string Name { get; set; }
        public string Position { get; set; }
        public string Mobile { get; set; }
        public string Address { get; set; }
    }

    public class ListLawyerDto
    {
        public int Id { get; set; }
        public string Name { get; set; }

    }
}
