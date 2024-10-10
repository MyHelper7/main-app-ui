import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/template', pathMatch: 'full' },
  {
    path: 'template',
    loadChildren: () => import('./modules/project-template/project-template.module').then(m => m.ProjectTemplateModule)
  },
];
