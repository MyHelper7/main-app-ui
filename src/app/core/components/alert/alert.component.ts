import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'Alert',
  standalone: true,
  imports: [CommonModule, NgbAlert],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  @Input() type:
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'light'
    | 'dark' = 'info';
  @Input() dismissible: boolean = false;
  @Output() dismiss = new EventEmitter<void>();

  dismissAlert() {
    this.dismiss.emit();
  }
}
