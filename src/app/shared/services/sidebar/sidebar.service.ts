import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarMenuItem } from '../../adapters';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private menuItems: SidebarMenuItem[] = []; // Load your menu items here
  private activeMenuItem = new BehaviorSubject<SidebarMenuItem[]>([]);

  private sidebarOpenSubject = new BehaviorSubject<boolean>(false);
  public sidebarOpen$ = this.sidebarOpenSubject.asObservable();
  
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveMenuItem(this.router.url);
      }
    });
  }

  setMenuItems(items: SidebarMenuItem[]) {
    this.menuItems = items;
    this.setActiveMenuItem(this.router.url);
  }

  private setActiveMenuItem(url: string) {
    this.menuItems.forEach(item => {
      item.active = false;
      if (item.subItems?.length) {
        item.subItems.forEach(subItem => {
          const routes = url?.split('/');
          if (subItem.link && routes.includes(subItem.link)) {
            subItem.active = true;
            item.active = true;
            item.open = true;
          } else {
            subItem.active = false;
          }
        });
      } else {
        if (item.link && url.indexOf(item.link?.toString()) > -1) {
          item.active = true;
        }
      }
    });
    this.activeMenuItem.next(this.menuItems);
  }

  getActiveMenuItems() {
    return this.activeMenuItem.asObservable();
  }

  toggleSidebar() {
    this.setSidebarState(!this.sidebarOpenSubject.value);
  }

  setSidebarState(isOpen: boolean) {
    const overflowClass = 'overflow-hidden';
    if (isOpen) {
      document.body.classList.add(overflowClass);
    } else {
      document.body.classList.remove(overflowClass);
    }
    this.sidebarOpenSubject.next(isOpen);
  }
}
