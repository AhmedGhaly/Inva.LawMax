using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Inva.LawMax.Lawyers
{
    public interface ILawyerAppService :
       ICrudAppService<
           LawyerDto,
           int,
           PagedAndSortedResultRequestDto,
           CreateUpdateLawyerDto>
    {
        public Task<List<ListLawyerDto>> GetListLawyersAsync();

    }

}
