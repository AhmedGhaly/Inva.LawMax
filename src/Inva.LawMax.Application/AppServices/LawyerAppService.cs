using Inva.LawMax.Lawyers;
using Inva.LawMax.Permissions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Inva.LawMax.LawCases
{
    public class LawyerAppService :
         CrudAppService<
             Lawyer,
             LawyerDto,
             int,
             PagedAndSortedResultRequestDto,
             CreateUpdateLawyerDto>,
         ILawyerAppService
    {
        public LawyerAppService(IRepository<Lawyer, int> repository)
            : base(repository)
        {
          
        }

        public async Task<List<ListLawyerDto>> GetListLawyersAsync()
        {
                return await Repository
                .GetQueryableAsync().Result
                .Select(l => new ListLawyerDto
                {
                    Id = l.Id,
                    Name = l.Name
                }).ToListAsync();
        }
    }
}
