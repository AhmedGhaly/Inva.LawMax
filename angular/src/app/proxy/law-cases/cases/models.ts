import type { AuditedEntityDto } from '@abp/ng.core';
import type { LawyerDto } from '../lawyers/models';
import type { HearingDto } from '../hearings/models';

export interface CaseDto extends AuditedEntityDto<number> {
  number?: string;
  year: number;
  litigationDegree?: string;
  finalVerdict?: string;
  lawyers: LawyerDto[];
  hearings: HearingDto[];
}

export interface CaseListDto {
  id: number;
  number?: string;
}

export interface CreateUpdateCaseDto {
  number: string;
  year: number;
  litigationDegree: string;
  finalVerdict?: string;
  lawyerIds: number[];
}
