import { Component } from '@angular/core';
import { PaginationComponent } from '../../../../core';

@Component({
  selector: 'app-ui-pagination',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './ui-pagination.component.html',
  styleUrl: './ui-pagination.component.scss'
})
export class UIPaginationComponent {

}
