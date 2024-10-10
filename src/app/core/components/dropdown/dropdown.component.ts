import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { IconComponent } from "../icon/icon.component";
import { DynamicContentComponent } from "../dynamic-content/dynamic-content.component";
import { BadgeComponent } from '../badge/badge.component';
import { DropdownDirection, IDropdownItem } from '../../adapters';

@Component({
  selector: 'core-dropdown',
  standalone: true,
  imports: [CommonModule, RouterLink, NgbDropdownModule, IconComponent, DynamicContentComponent, BadgeComponent],
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements OnInit {
  @Input() containercssClass: string = '';
  @Input() cssClass: string = '';
  @Input() direction: DropdownDirection = 'auto';
  @Input() items: IDropdownItem[] = [];

  public containerClass!: string;
  public dropdownItemClass!: string;
  public dropdownClass!: string;
  public dropdownMenueClass!: string;

  ngOnInit(): void {
    this.containerClass = this.getContainerClass();
    this.dropdownClass = this.getDropdownClass();
    this.dropdownItemClass = this.getDropdownItemClass();
    this.dropdownMenueClass = this.getDropdownMenueClass();
  }

  private getContainerClass(): string {
    const baseClasses: string[] = [''];

    if (this.containercssClass) baseClasses.push(this.containercssClass);

    return baseClasses.join(' ');
  }

  private getDropdownClass(): string {
    const baseClasess = ['hide-arrow'];

    if (this.cssClass) baseClasess.push(this.cssClass);

    return baseClasess.join(' ');
  }

  private getDropdownItemClass(): string {
    return '';
  }

  private getDropdownMenueClass(): string {
    const baseClasess = ['dropdown-menu'];

    if (this.direction != 'auto') baseClasess.push(`dropdown-menu-${this.direction}`);

    return baseClasess.join(' ');
  }
}
