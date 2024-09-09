import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Button',
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
  @Input() shape: 'rectangle' | 'circle' | 'rounded' | 'pill' = 'rectangle';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() fullWidth: boolean = false;
  @Input() shadow: boolean = false;

  @Input() btnClass: string = ''; // Extra Tailwind classes
  @Input() type: string = 'button'; // Button type (button, submit, reset)

  // Event Emitters for click, hover, and blur
  @Output() buttonClick = new EventEmitter<Event>();
  @Output() buttonHover = new EventEmitter<Event>();
  @Output() buttonBlur = new EventEmitter<Event>();

  get buttonClasses(): string {
    const baseClass = 'focus:outline-none font-medium';
    const widthClass = this.fullWidth ? 'w-full' : '';
    const shadowClass = this.shadow ? 'shadow-lg' : '';
    const disabledClass = this.disabled ? 'opacity-50 cursor-not-allowed' : '';

    const colorClass = this.getColorClasses();
    const sizeClass = this.getSizeClass();
    const shapeClass = this.getShapeClass();

    return `${baseClass} ${sizeClass} ${shapeClass} ${widthClass} ${shadowClass} ${colorClass} ${disabledClass}`;
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
        return 'px-2 py-1 text-sm';
      case 'lg':
        return 'px-6 py-3 text-lg';
      case 'md':
      default:
        return 'px-4 py-2';
    }
  }

  private getShapeClass(): string {
    switch (this.shape) {
      case 'circle':
        return 'rounded-full';
      case 'rounded':
        return 'rounded-xl'; // More rounded than default
      case 'pill':
        return 'rounded-full'; // Pill-shaped with full rounded edges and extended padding
      case 'rectangle':
      default:
        return 'rounded-lg'; // Default rectangle with slightly rounded corners
    }
  }

  private typeClassMap(): { [key: string]: string } {
    return {
      primary: 'bg-blue-500 hover:bg-blue-600 text-white',
      secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
      success: 'bg-green-500 hover:bg-green-600 text-white',
      danger: 'bg-red-500 hover:bg-red-600 text-white',
      warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
      info: 'bg-teal-500 hover:bg-teal-600 text-white',
      light: 'bg-gray-200 hover:bg-gray-300 text-gray-700',
      dark: 'bg-gray-800 hover:bg-gray-900 text-white',
      link: 'bg-transparent text-blue-500 hover:text-blue-600 underline',
    };
  }

  private outlineClassMap(): { [key: string]: string } {
    return {
      primary:
        'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
      secondary:
        'border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white',
      success:
        'border border-green-500 text-green-500 hover:bg-green-500 hover:text-white',
      danger:
        'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white',
      warning:
        'border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white',
      info: 'border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white',
      light: 'border border-gray-200 text-gray-700 hover:bg-gray-200',
      dark: 'border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white',
      link: 'bg-transparent text-blue-500 hover:text-blue-600 underline',
    };
  }

  // Event handling functions
  onClick(event: MouseEvent) {
    if (this.disabled) return;
    this.buttonClick?.emit(event);
  }

  // Handle the wave effect on hover
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
