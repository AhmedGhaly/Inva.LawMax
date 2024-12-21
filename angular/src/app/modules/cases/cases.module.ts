import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CasesListComponent } from './cases-list/cases-list.component';


@NgModule({
  declarations: [CasesListComponent],
  imports: [
    SharedModule,
    CommonModule,
    CasesRoutingModule
  ]
})
export class CasesModule { }
