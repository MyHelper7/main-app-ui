import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonSize, ButtonType, ButtonVariant } from '../../adapters';

@Component({
  selector: 'core-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() type: ButtonType = 'button';
  @Input() size: ButtonSize = '';
  @Input() rounded: boolean = false;
  @Input() outline: boolean = false;
  @Input() label: boolean = false;
  @Input() text: boolean = false;
  @Input() active: boolean = false;
  @Input() disabled: boolean = false;
  @Input() icon: boolean = false;
  @Input() cssClass: string = '';

  @Output() onClick = new EventEmitter();

  get buttonClass(): string {
    const baseClasses: string[] = ['btn'];

    if (this.cssClass) baseClasses.push(this.cssClass);

    if (this.outline) baseClasses.push(`btn-outline-${this.variant}`);
    else if (this.label) baseClasses.push(`btn-label-${this.variant}`);
    else if (this.text) baseClasses.push(`btn-text-${this.variant}`);
    else baseClasses.push(`btn-${this.variant}`);

    if (this.size) baseClasses.push(`btn-${this.size}`);

    const additionalClasses: string[] = [
        this.rounded ? 'rounded-pill' : '',
        this.disabled ? 'disabled' : '',
        this.icon ? 'btn-icon' : '',
        this.active ? 'active' : '',
    ].filter(Boolean);
    baseClasses.push(...additionalClasses);

    return baseClasses.join(' ');
  }

  public buttonClick($event: MouseEvent) {
    this.onClick?.emit($event);
  }
}
