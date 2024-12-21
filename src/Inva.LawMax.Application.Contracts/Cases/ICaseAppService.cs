using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Inva.LawMax.Cases
{
    public interface ICaseAppService :
         ICrudAppService<
             CaseDto,
             int,
             PagedAndSortedResultRequestDto,
             CreateUpdateCaseDto>
    {
        public Task<List<CaseListDto>> GetListCasesListAsync();
    }
}
