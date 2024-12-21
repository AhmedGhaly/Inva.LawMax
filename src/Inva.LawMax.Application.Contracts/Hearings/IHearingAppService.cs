using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Inva.LawMax.Hearings
{
    public interface IHearingAppService :
       ICrudAppService<
           HearingDto,
           int,
           PagedAndSortedResultRequestDto,
           CreateUpdateHearingDto>
    {
    }

}
