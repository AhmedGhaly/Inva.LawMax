import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawyersListComponent } from './lawyers-list/lawyers-list.component';
import { authGuard, permissionGuard } from '@abp/ng.core';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:LawyersListComponent,canActivate: [authGuard, permissionGuard]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawyersRoutingModule { }
