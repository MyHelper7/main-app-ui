import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SpinnerSize, SpinnerType, SpinnerVariant } from '../../adapters';

@Component({
  selector: 'core-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent implements OnInit {
  @Input() variant: SpinnerVariant = 'primary';
  @Input() type: SpinnerType = 'border';
  @Input() size: SpinnerSize = '';
  @Input() cssClass: string = '';

  public spinnerClass!: string;

  ngOnInit(): void {
    this.spinnerClass = this.getSpinnerClass();
  }
 
  private getSpinnerClass() {
    const baseClasses: string[] = [`text-${this.variant}`];
    if (this.type) baseClasses.push(`spinner-${this.type}`);
    if (this.size) baseClasses.push(`spinner-border-${this.size}`);

    return baseClasses.join(' ');
  }
}
