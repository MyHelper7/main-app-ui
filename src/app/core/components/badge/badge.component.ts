import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BadgeVariant, BadgeType } from '../../adapters';

@Component({
  selector: 'core-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
})
export class BadgeComponent implements OnInit {
  @Input() variant: BadgeVariant = 'primary';
  @Input() type?: BadgeType;
  @Input() fitContent: boolean = false;
  @Input() label: boolean = false;
  @Input() rounded: boolean = false;
  @Input() cssClass?: string;

  public badgeClass!: string;

  ngOnInit(): void {
    this.badgeClass = this.getBadgeClass();
  }

  private getBadgeClass() {
    const baseClasses = ['badge'];

    if (this.cssClass) {
      baseClasses.push(this.cssClass);
    }

    if (this.type) baseClasses.push(`badge-${this.type}`);
    if (this.rounded) baseClasses.push('rounded-pill');
    if (this.fitContent) baseClasses.push('badge-center');

    if (this.label) baseClasses.push(`bg-label-${this.variant}`);
    else baseClasses.push(`bg-${this.variant}`);

    return baseClasses.join(' ');
  }
}
