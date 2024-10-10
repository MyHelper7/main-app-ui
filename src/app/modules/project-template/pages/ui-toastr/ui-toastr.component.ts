import { Component } from '@angular/core';
import { ButtonComponent, ToastrService } from '../../../../core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-toastr',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './ui-toastr.component.html',
  styleUrl: './ui-toastr.component.scss'
})
export class UIToastrComponent {
  constructor(private toastrService: ToastrService) {}

  showSuccess() {
    this.toastrService.success('Success Message', 'Hello');
  }

  showError() {
    this.toastrService.error('Success Message', 'Hello');
  }

  showInfo() {
    this.toastrService.info('Success Message', 'Hello');
  }

  showWarning() {
    this.toastrService.warning('Success Message', 'Hello');
  }

  showPrimary() {
    this.toastrService.primary('Success Message', 'Hello');
  }
}
