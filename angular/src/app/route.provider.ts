import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      // {
      //   path: '/books',
      //   name: '::Menu:Books',
      //   iconClass: 'fas fa-book',
      //   layout: eLayoutType.application,
      //   requiredPolicy: 'LawMax.Books',
      // },
      {
        path: 'cases',
        name: 'Cases',
        iconClass: 'fas fa-book',
        layout: eLayoutType.application,
        requiredPolicy: 'LawCases.Cases',
      },
      {
        path: '/lawyers',
        name: '::Menu:Lawyers',
        iconClass: 'fas fa-users',
        layout: eLayoutType.application,
        requiredPolicy: 'LawCases.Lawyers',
      },
      {
        path: 'hearings',
        name: 'Hearings',
        iconClass: 'fas fa-users',
        layout: eLayoutType.application,
        requiredPolicy: 'LawCases.Hearings',
      }
    ]);
  };
}
