import { Routes } from '@angular/router';
import { UiTemplateComponent } from './ui-template/ui-template.component';
import { ButtonPageComponent, AlertPageComponent } from './ui-template/pages';

export const routes: Routes = [
  { path: '', redirectTo: '/ui-template', pathMatch: 'full' },
  {
    path: 'ui-template',
    component: UiTemplateComponent,
    children: [
      {
        path: 'buttons',
        component: ButtonPageComponent,
      },
      {
        path: 'alerts',
        component: AlertPageComponent,
      },
      { path: '**', redirectTo: '/ui-template/buttons' },
    ],
  },
];
