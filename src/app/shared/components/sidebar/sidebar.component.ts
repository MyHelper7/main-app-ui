import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../services';
import { BadgeComponent, DynamicContent, DynamicContentComponent } from "../../../core";
import { SidebarMenuItem } from '../../adapters';

export interface BrandConfig {
  name: DynamicContent;
  logo: any;
  url?: string;
  external?: boolean;
}

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, BadgeComponent, DynamicContentComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  @Input() brand?: BrandConfig;
  @Input() menuItems: SidebarMenuItem[] = [];

  public items: SidebarMenuItem[] = [];

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.setMenuItems(this.menuItems); // Set your menu items
    this.sidebarService.getActiveMenuItems()
      .subscribe((items: SidebarMenuItem[]) => {
        this.items = items;
      });
  }

  public handleItemClick(event: MouseEvent, item: any): void {
    if (item.subItems?.length) {
      event.preventDefault();
      item.open = !item.open;
    } else {
      this.closeSidebar();
    }
  }

  public closeSidebar() {
    this.sidebarService.setSidebarState(false);
  }
}
