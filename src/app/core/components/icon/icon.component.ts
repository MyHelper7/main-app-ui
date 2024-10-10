import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { IconName, IconSize } from '../../adapters';

@Component({
  selector: 'core-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
})
export class IconComponent implements OnInit {
  @Input() name: IconName = '';
  @Input() size: IconSize = '';
  @Input() cssClass?: string;

  public iconClass: string = '';

  ngOnInit(): void {
    this.iconClass = this.getIconClass();
  }

  public getIconClass() {
    const baseClasses = ['bx'];
    baseClasses.push(`bx-${this.name}`);
    if (this.cssClass) baseClasses.push(this.cssClass);
    if (this.size) baseClasses.push(`bx-${this.size}`);

    return baseClasses.join(' ');
  }
}
