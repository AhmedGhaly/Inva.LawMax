import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
  { path: 'books', loadChildren: () => import('./book/book.module').then(m => m.BookModule) },
  { path: 'cases', 
    loadChildren: () => 
      import('./modules/cases/cases.module').then(m => m.CasesModule) 
  },
  { path: 'lawyers', 
    loadChildren: () => 
      import('./modules/lawyers/lawyers.module').then(m => m.LawyersModule) 
  },
  { path: 'hearings', 
    loadChildren: () => 
      import('./modules/hearings/hearings.module').then(m => m.HearingsModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
