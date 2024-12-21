import type { CreateUpdateHearingDto, HearingDto } from './hearings/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HearingService {
  apiName = 'Default';
  

  create = (input: CreateUpdateHearingDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, HearingDto>({
      method: 'POST',
      url: '/api/app/hearing',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/hearing/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, HearingDto>({
      method: 'GET',
      url: `/api/app/hearing/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<HearingDto>>({
      method: 'GET',
      url: '/api/app/hearing',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: CreateUpdateHearingDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, HearingDto>({
      method: 'PUT',
      url: `/api/app/hearing/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
