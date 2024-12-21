import type { AuditedEntityDto } from '@abp/ng.core';

export interface HearingDto extends AuditedEntityDto<number> {
  date?: string;
  decision?: string;
  caseNumber?: string;
  caseId: number;
}

export interface CreateUpdateHearingDto {
  date: string;
  decision?: string;
  caseId: number;
}
