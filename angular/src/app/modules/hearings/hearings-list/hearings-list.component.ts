import { ListService, PagedResultDto } from '@abp/ng.core';
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CaseService } from '@proxy/law-cases/case.service';
import { HearingService } from '@proxy/law-cases/hearing.service';
import { HearingDto } from '@proxy/law-cases/hearings';

@Component({
  selector: 'app-hearings-list',
  templateUrl: './hearings-list.component.html',
  styleUrl: './hearings-list.component.scss',
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class HearingsListComponent implements OnInit  {
  hearings: any = { items: [], totalCount: 0 }as PagedResultDto<HearingDto>;
  cases: any[] = [];
  isModalOpen = false;
  form: FormGroup;
  selectedHearing = {} as HearingDto;
  constructor(
    public readonly list: ListService,
    private hearingService: HearingService,
    private caseService: CaseService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService

  ) {}

  ngOnInit(): void {
    this.loadCases();
    const hearingStreamCreator = (query) => this.hearingService.getList(query);

    this.list.hookToQuery(hearingStreamCreator).subscribe((response) => {
      this.hearings = response;
    });
  }



  loadCases() {
    this.caseService.getListCasesList().subscribe((cases) => {
      this.cases = cases;
      console.log(this.cases);

    });
  }
  buildForm(hearing?: HearingDto) {
  this.form = this.fb.group({
    date: [this.selectedHearing.date || '', Validators.required],
    decision: [this.selectedHearing.decision || ''],
    caseId: [this.selectedHearing.caseId || null, Validators.required],
  });
  console.log(this.form.value);
}

  createHearing() {
    this.selectedHearing = {} as HearingDto;
    this.loadCases(); 
    this.buildForm(); 
    console.log(this.form.value);
    this.isModalOpen = true;
  }

  editHearing(id: number) {
    this.hearingService.get(id).subscribe((hearing) => {
      this.selectedHearing = hearing;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  deleteHearing(id: number) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.hearingService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  save() {
    if (this.form.invalid) {
      console.log(this.form.value);
      return;
    }

    const request = this.selectedHearing.id
      ? this.hearingService.update(this.selectedHearing.id, this.form.value)
      : this.hearingService.create(this.form.value);

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }

  
}
