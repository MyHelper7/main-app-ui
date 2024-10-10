import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicContentComponent } from '../dynamic-content/dynamic-content.component';
import { GenericToastrOptions } from '../../services';
import { CommonModule } from '@angular/common';
import { DynamicContent } from '../../adapters';

@Component({
  selector: 'core-toastr',
  standalone: true,
  imports: [CommonModule, DynamicContentComponent],
  templateUrl: './toastr.component.html',
  styleUrl: './toastr.component.scss',
})
export class ToastrComponent {
  @Input() title!: string;
  @Input() content!: DynamicContent;
  @Input() options?: GenericToastrOptions;

  @Output() onClose = new EventEmitter<void>();

  private timer: any;
  public toastClass!: object;

  ngOnInit() {
    if (this.options?.duration) {
      this.timer = setTimeout(() => this.close(), this.options.duration);
    }

    this.toastClass = this.getToastClass();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  private getToastClass() {
    return {
      'bg-success': this.options?.type === 'success',
      'bg-danger': this.options?.type === 'error',
      'bg-info': this.options?.type === 'info',
      'bg-warning': this.options?.type === 'warning',
      'bg-primary': this.options?.type === 'primary'
    };
  }

  public close() {
    clearTimeout(this.timer);
    this.onClose.emit();
  }

}
