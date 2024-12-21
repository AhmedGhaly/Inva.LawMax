import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawyersRoutingModule } from './lawyers-routing.module';
import { LawyersListComponent } from './lawyers-list/lawyers-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [LawyersListComponent],
  imports: [
    SharedModule,
    CommonModule,
    LawyersRoutingModule
  ]
})
export class LawyersModule { }
