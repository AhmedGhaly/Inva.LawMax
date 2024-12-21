using Inva.LawMax.Permissions;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.ObjectMapping;
using Volo.Abp.Uow;
using Microsoft.EntityFrameworkCore;
using Inva.LawMax.Cases;

namespace Inva.LawMax.LawCases
{

    public class CaseAppService :
        CrudAppService<
            Case,
            CaseDto,
            int,
            PagedAndSortedResultRequestDto,
            CreateUpdateCaseDto>,
        ICaseAppService
    {
        private readonly IRepository<CaseLawyer, int> caseLawyerRepository;

        public CaseAppService(IRepository<Case, int> repository,
            IRepository<CaseLawyer, int> caseLawyerRepository
             )
            : base(repository)
        {
            this.caseLawyerRepository = caseLawyerRepository;

        }

        public override async Task<CaseDto> CreateAsync(CreateUpdateCaseDto input)
        {


            var caseEntity = ObjectMapper.Map<CreateUpdateCaseDto, Case>(input);
            await Repository.InsertAsync(caseEntity, autoSave: true);
            foreach (var lawyerId in input.LawyerIds)
            {
                var caseLawyer = new CaseLawyer
                {
                    CaseId = caseEntity.Id,
                    LawyerId = lawyerId
                };
                await caseLawyerRepository.InsertAsync(caseLawyer);
            }

            return ObjectMapper.Map<Case, CaseDto>(caseEntity);

        }

        public override async Task<CaseDto> UpdateAsync
            (int id, CreateUpdateCaseDto input)
        {
            var caseEntity = await Repository.GetAsync(id);

            ObjectMapper.Map(input, caseEntity);

            await caseLawyerRepository.DeleteAsync(cl => cl.CaseId == id);

            foreach (var lawyerId in input.LawyerIds)
            {
                var caseLawyer = new CaseLawyer
                {
                    CaseId = caseEntity.Id,
                    LawyerId = lawyerId
                };
                await caseLawyerRepository.InsertAsync(caseLawyer);
            }

            return ObjectMapper.Map<Case, CaseDto>(caseEntity);
        }

       
        public override async Task<PagedResultDto<CaseDto>> GetListAsync(PagedAndSortedResultRequestDto input)
        {
            var caseEntity = await Repository
                 .GetQueryableAsync().Result
                 .Include(c => c.Hearings)
                 .Include(c => c.CaseLawyers)
                 .ThenInclude(l => l.Lawyer).ToListAsync();
            var totalCount = caseEntity.Count();

            var items = caseEntity
                .Skip(input.SkipCount)
                .Take(input.MaxResultCount)
                .ToList();

            return new PagedResultDto<CaseDto>(
                totalCount,
                ObjectMapper.Map<List<Case>, List<CaseDto>>(items)
            );
        }

        public Task<List<CaseListDto>> GetListCasesListAsync()
        {
            return Repository
                .GetQueryableAsync().Result
                .Select(c => new CaseListDto
                {
                    Id = c.Id,
                    Number = c.Number,
                }).ToListAsync();
        }
    }


}
