import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HearingsRoutingModule } from './hearings-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HearingsListComponent } from './hearings-list/hearings-list.component';


@NgModule({
  declarations: [HearingsListComponent],
  imports: [
    CommonModule,
    HearingsRoutingModule,
    SharedModule
  ]
})
export class HearingsModule { }
