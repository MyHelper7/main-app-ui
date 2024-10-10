import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IBreadcrumbItem } from '../../adapters';


@Component({
  selector: 'core-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
  @Input() items: IBreadcrumbItem[] = [];
  @Input() styleClass?: string;
}
