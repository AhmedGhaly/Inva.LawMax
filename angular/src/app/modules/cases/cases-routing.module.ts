import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesListComponent } from './cases-list/cases-list.component';
import { authGuard, permissionGuard } from '@abp/ng.core';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:CasesListComponent ,canActivate: [authGuard, permissionGuard] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
