import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectTemplateComponent } from './project-template.component';
import { ProjectTemplatePage } from './project-template.page';

export const routes: Routes = [
  {
    path: '',
    component: ProjectTemplateComponent,
    children: [
      ...ProjectTemplatePage.getRoutes(),
      { path: '**', redirectTo: ProjectTemplatePage.defaultRoute },
    ],
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProjectTemplateModule { }
