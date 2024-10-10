import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, TemplateRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../services';
import { DropdownComponent } from '../../../core';
import { IconComponent } from "../../../core/components/icon/icon.component";

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, DropdownComponent, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() navbarOptions: any = [];

  public isNavbarVisible = true;
  public lastScrollTop = 0;

  constructor(private sidebarService: SidebarService) {}

  public toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    this.isNavbarVisible = !(currentScrollTop > this.lastScrollTop);

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }
}
