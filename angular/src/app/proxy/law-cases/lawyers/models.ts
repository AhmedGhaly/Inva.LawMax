import type { AuditedEntityDto } from '@abp/ng.core';

export interface LawyerDto extends AuditedEntityDto<number> {
  name?: string;
  position?: string;
  mobile?: string;
  address?: string;
}

export interface CreateUpdateLawyerDto {
  name: string;
  position: string;
  mobile: string;
  address?: string;
}

export interface ListLawyerDto {
  id: number;
  name?: string;
}
