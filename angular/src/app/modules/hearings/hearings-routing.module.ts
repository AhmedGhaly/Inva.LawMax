
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HearingsListComponent } from './hearings-list/hearings-list.component';
import { authGuard, permissionGuard } from '@abp/ng.core';

const routes: Routes = [

  { path: '', pathMatch: 'full', component:HearingsListComponent,canActivate: [authGuard, permissionGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HearingsRoutingModule { }
