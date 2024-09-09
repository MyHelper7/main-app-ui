import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'info';
  @Input() dismissible: boolean = false;
  @Output() dismiss = new EventEmitter<void>();

  showAlert = true;

  get alertClasses(): string {
    const baseClass = 'p-4 mb-4 text-sm border rounded-lg';
    const typeClass = this.getTypeClass();
    const dismissibleClass = this.dismissible ? 'relative' : '';

    return `${baseClass} ${typeClass} ${dismissibleClass}`;
  }

  private getTypeClass(): string {
    switch (this.type) {
      case 'success':
        return 'bg-green-100 border-green-400 text-green-700';
      case 'error':
        return 'bg-red-100 border-red-400 text-red-700';
      case 'warning':
        return 'bg-yellow-100 border-yellow-400 text-yellow-700';
      case 'info':
      default:
        return 'bg-blue-100 border-blue-400 text-blue-700';
    }
  }

  dismissAlert() {
    this.showAlert = false;
    this.dismiss.emit();
  }
}
