import { Component } from '@angular/core';
import { OffcanvasComponent, OffcanvasService } from '../../../../core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-offcanvas',
  standalone: true,
  imports: [CommonModule, OffcanvasComponent],
  templateUrl: './ui-offcanvas.component.html',
  styleUrl: './ui-offcanvas.component.scss'
})
export class UIOffcanvasComponent {
  constructor(private offcanvasService: OffcanvasService) {}

  public showCanvas(id: string) {
    this.offcanvasService.show(id);
  }
}
