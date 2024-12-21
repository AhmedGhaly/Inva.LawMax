import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { LawyerDto } from '@proxy/law-cases/lawyers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LawyerService } from '@proxy/law-cases/lawyer.service';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
@Component({
  selector: 'app-lawyers-list',
  templateUrl: './lawyers-list.component.html',
  styleUrl: './lawyers-list.component.scss',
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class LawyersListComponent implements OnInit {

  lawyers = { items: [], totalCount: 0 } as PagedResultDto<LawyerDto>;
  selectedLawyer = {} as LawyerDto;
  form: FormGroup;

  isModalOpen = false;
  constructor(
    public readonly list: ListService,
    private lawyerService: LawyerService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService
  ) {}
  ngOnInit() {
    const lawyerStreamCreator = (query) => this.lawyerService.getList(query);

    this.list.hookToQuery(lawyerStreamCreator).subscribe((response) => {
      this.lawyers = response;
    });
  }

  createLawyer() {
    this.selectedLawyer = {} as LawyerDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editLawyer(id: number) {
    this.lawyerService.get(id).subscribe((lawyer) => {
      this.selectedLawyer = lawyer;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  delete(id: number) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.lawyerService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.selectedLawyer.name || '', Validators.required],
      position: [this.selectedLawyer.position || '', Validators.required],
      mobile: [this.selectedLawyer.mobile || '', Validators.required],
      address: [this.selectedLawyer.address || ''],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const request = this.selectedLawyer.id
      ? this.lawyerService.update(this.selectedLawyer.id, this.form.value)
      : this.lawyerService.create(this.form.value);

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }

}
