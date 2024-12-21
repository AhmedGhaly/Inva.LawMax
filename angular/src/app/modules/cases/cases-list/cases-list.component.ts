import { ListService, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { LawyerService } from '@proxy/law-cases/lawyer.service';
import { CaseService } from '@proxy/law-cases/case.service';
import { CaseDto } from '@proxy/law-cases/cases';


@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrl: './cases-list.component.scss',
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class CasesListComponent implements OnInit  {

  cases : any = { items: [], totalCount: 0 }as PagedResultDto<CaseDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedCase = {} as CaseDto;
  lawyers: any[] = [];

  constructor(
    public readonly list: ListService,
    private caseService: CaseService,
    private fb: FormBuilder,
    private lawyerService: LawyerService,
    private confirmation: ConfirmationService
  ){}
  ngOnInit(): void {
    const caseStreamCreator = (query) => this.caseService.getList(query);
    this.loadLawyers();
    this.list.hookToQuery(caseStreamCreator).subscribe((response) => {
      this.cases = response;
    });
  }
  loadLawyers() {
    this.lawyerService.getListLawyers().subscribe((lawyers) => {
      console.log(lawyers);
      this.lawyers = [...lawyers];
      console.log(this.lawyers);
    });
    console.log(this.lawyers);
  }
  buildForm(caseDto?: CaseDto) {
    this.form = this.fb.group({
      number: [this.selectedCase.number || '', Validators.required],
      year: [this.selectedCase.year || '', Validators.required],
      litigationDegree: [this.selectedCase.litigationDegree || '', Validators.required],
      finalVerdict: [this.selectedCase.finalVerdict || ''],
      lawyerIds: [this.selectedCase.lawyers?.map(l => l.id) || []],
    });
  }
  
  // // create method 
  createCase() {
    this.selectedCase = {} as CaseDto;
    this.buildForm();
    this.isModalOpen = true;
  }


  editCase(id: number) {
    this.caseService.get(id).subscribe((caseItem) => {
      this.selectedCase = caseItem;
      this.buildForm();
      this.isModalOpen = true;
    });
  }
  deleteCase(id: number) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.caseService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const request = this.selectedCase.id
      ? this.caseService.update(this.selectedCase.id, this.form.value)
      : this.caseService.create(this.form.value);

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }
}
