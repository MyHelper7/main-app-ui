import { Component } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItem, IBreadcrumbItem } from '../../../../core';

@Component({
  selector: 'app-ui-breadcrumb',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './ui-breadcrumb.component.html',
  styleUrl: './ui-breadcrumb.component.scss'
})
export class UIBreadcrumbComponent {

  public breadcrumbItems: IBreadcrumbItem[] = [
    new BreadcrumbItem({ label: 'Home', url: 'javascript:void(0);', external: true }),
    new BreadcrumbItem({ label: 'Library', url: '/template/analytics' }),
    new BreadcrumbItem({ label: 'Data' }),
  ];
}
