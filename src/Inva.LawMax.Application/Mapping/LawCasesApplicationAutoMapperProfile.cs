using AutoMapper;
using Inva.LawMax.LawCases;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Inva.LawMax.Lawyers;
using Inva.LawMax.Hearings;
using Inva.LawMax.Cases;

namespace Inva.LawMax.Mapping
{
    public class LawCasesApplicationAutoMapperProfile : Profile
    {
        public LawCasesApplicationAutoMapperProfile()
        {
            CreateMap<Lawyer, LawyerDto>();
            CreateMap<CreateUpdateLawyerDto, Lawyer>();

            // Mapping for Case and CaseDto
            CreateMap<Case, CaseDto>()
                .ForMember(dest => dest.Lawyers, opt => opt.MapFrom(src => src.CaseLawyers.Select(cl => cl.Lawyer)))
                .ForMember(dest => dest.Hearings, opt => opt.MapFrom(src => src.Hearings))
                .ReverseMap();

            CreateMap<CreateUpdateCaseDto, Case>();

            CreateMap<LawyerDto, CaseLawyer>()
                .ForMember(dest => dest.LawyerId, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Lawyer, opt => opt.Ignore());


            CreateMap<Hearing, HearingDto>()
            .ForMember(dest => dest.CaseNumber, opt => opt.MapFrom(src => src.Case.Number))
            .ForMember(dest => dest.CaseId, opt => opt.MapFrom(src => src.Case.Id));
            CreateMap<CreateUpdateHearingDto, Hearing>();

        }
    }
}
