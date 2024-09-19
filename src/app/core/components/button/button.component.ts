import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link' = 'primary';
  @Input() outline: boolean = false; // For outline variant
  @Input() disabled: boolean = false;

  // Shape, size, width, shadow
  @Input() shape: 'rectangle' | 'rounded' | 'pill' = 'rectangle';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() fullWidth: boolean = false;
  @Input() shadow: boolean = false;

  @Input() btnClass: string = ''; // Extra Bootstrap classes
  @Input() type: string = 'button'; // Button type (button, submit, reset)

  // Event Emitters for click, hover, and blur
  @Output() buttonClick = new EventEmitter<Event>();
  @Output() buttonHover = new EventEmitter<Event>();
  @Output() buttonBlur = new EventEmitter<Event>();

  get buttonClasses(): string {
    const baseClass = 'btn';
    const widthClass = this.fullWidth ? 'w-100' : '';
    const shadowClass = this.shadow ? 'shadow-lg' : '';
    const disabledClass = this.disabled ? 'disabled' : '';

    const colorClass = this.getColorClasses();
    const sizeClass = this.getSizeClass();
    const shapeClass = this.getShapeClass();

    const classes = [
      baseClass,
      sizeClass,
      shapeClass,
      widthClass,
      shadowClass,
      colorClass,
      disabledClass,
      this.btnClass,
    ];
    return classes.filter((n) => n).join(' ');
  }

  private getColorClasses(): string {
    const typeClassMap: { [key: string]: string } = this.typeClassMap();

    const outlineClassMap: { [key: string]: string } = this.outlineClassMap();

    if (this.outline) {
      return outlineClassMap[this.variant] || '';
    } else {
      return typeClassMap[this.variant] || '';
    }
  }

  private getSizeClass(): string {
    switch (this.size) {
      case 'sm':
        return 'btn-sm';
      case 'lg':
        return 'btn-lg';
      case 'md':
      default:
        return '';
    }
  }

  private getShapeClass(): string {
    switch (this.shape) {
      case 'rounded':
        return 'rounded';
      case 'pill':
        return 'rounded-pill';
      case 'rectangle':
      default:
        return ''; // Default rectangle in Bootstrap has no special class
    }
  }

  private typeClassMap(): { [key: string]: string } {
    return {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      success: 'btn-success',
      danger: 'btn-danger',
      warning: 'btn-warning',
      info: 'btn-info',
      light: 'btn-light',
      dark: 'btn-dark',
      link: 'btn-link',
    };
  }

  private outlineClassMap(): { [key: string]: string } {
    return {
      primary: 'btn-outline-primary',
      secondary: 'btn-outline-secondary',
      success: 'btn-outline-success',
      danger: 'btn-outline-danger',
      warning: 'btn-outline-warning',
      info: 'btn-outline-info',
      light: 'btn-outline-light',
      dark: 'btn-outline-dark',
      link: 'btn-link',
    };
  }

  // Event handling functions
  onClick(event: MouseEvent) {
    if (this.disabled) return;
    this.buttonClick?.emit(event);
  }

  onHover(event: MouseEvent) {
    if (this.disabled) return;
    this.buttonHover?.emit(event);
  }

  onBlur(event: Event) {
    if (!this.disabled) {
      this.buttonBlur?.emit(event);
    }
  }
}
