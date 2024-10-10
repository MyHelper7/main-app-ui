import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AlertVariant } from '../../adapters';

@Component({
  selector: 'core-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {
  @Input() variant: AlertVariant = 'primary';
  @Input() outline: boolean = false;
  @Input() solid: boolean = false;
  @Input() dismissible: boolean = false;
  @Input() cssClass: string = '';

  public alertClass!: string;

  ngOnInit(): void {
    this.alertClass = this.getAlertClass();
  }

  private getAlertClass() {
    const baseClasses = ['alert'];

    if (this.cssClass) baseClasses.push(this.cssClass);
    if (this.dismissible) baseClasses.push('alert-dismissible');
    
    if (this.solid) baseClasses.push(`alert-solid-${this.variant}`);
    else if (this.outline) baseClasses.push(`alert-outline-${this.variant}`);
    else baseClasses.push(`alert-${this.variant}`);

    return baseClasses.join(' ');
  }
}
