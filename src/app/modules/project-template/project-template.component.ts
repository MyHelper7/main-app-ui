import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BrandConfig, CommonService, NavbarComponent, NavbarOption, SidebarComponent, SidebarMenuItem, SidebarService, ThemeService } from '../../shared';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProjectTemplatePage } from './project-template.page';
import { Avatar, DropdownItem, Icon } from '../../core';

@Component({
  selector: 'app-project-template',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, SidebarComponent],
  templateUrl: './project-template.component.html',
  styleUrl: './project-template.component.scss'
})
export class ProjectTemplateComponent implements OnInit {
  public brandConfig?: BrandConfig;
  public sidebarMenuItems: SidebarMenuItem[] = [];

  @ViewChild('profileTemplate', { static: true }) profileTemplate?: TemplateRef<any>;

  public user = {
    name: 'John Doe',
    role: 'admin',
    avatar: 'img/avatars/1.png',
  };

  public sidebarOpen: boolean = false;
  public navbarOptions: any = [];

  constructor(
    private sidebarService: SidebarService,
    private themeService: ThemeService,
    private commonService: CommonService) {
    this.sidebarService.sidebarOpen$.subscribe((isOpen: boolean) => {
      this.sidebarOpen = isOpen;
    });
  }

  ngOnInit(): void {
    this.commonService.setPageTitle();

    this.brandConfig = this.commonService.getAppDetail();
    this.appltTheme();

    this.navbarOptions = this.getNavbarOptions();
    this.sidebarMenuItems = ProjectTemplatePage.menuItems({
      'DASHBOARD': 1,
      'COLLAPSE': 'Pending',
      'LIST_GROUP': 'Pending',
    });
  }

  public closeSidebar() {
    this.sidebarService.setSidebarState(false);
  }

  private getNavbarOptions() {
    return [
      new NavbarOption({
        type: 'dropdown',
        icon: new Icon('sun', { size: 'md' }),
        items: [
          new DropdownItem('button', { text: 'Light', icon: new Icon('sun', { cssClass: 'flex-shrink-0 me-3', size: 'md' }), action: () => this.updateTheme(this.themeService.THEME.LIGHT) }),
          new DropdownItem('button', { text: 'Dark', icon: new Icon('moon', { cssClass: 'flex-shrink-0 me-3', size: 'md' }), action: () => this.updateTheme(this.themeService.THEME.DARK) }),
          ...(this.themeService.isSyncSupported() ? [new DropdownItem('button', { text: 'System Default', icon: new Icon('mobile', { cssClass: 'flex-shrink-0 me-3', size: 'md' }), action: () => this.updateTheme(this.themeService.THEME.AUTO) })] : []),
        ],
      }),
      new NavbarOption({
        type: 'dropdown',
        avatar: new Avatar('img/avatars/1.png'),
        cssClass: 'p-0',
        items: [
          new DropdownItem('template', { template: this.profileTemplate }),
          new DropdownItem('internal-link', { text: 'Profile', icon: new Icon('user', { cssClass: 'flex-shrink-0 me-3', size: 'md' }), url: 'profile' }),
          new DropdownItem('external-link', { text: 'Settings', icon: new Icon('cog', { cssClass: 'flex-shrink-0 me-3', size: 'md' }), url: 'setting' }),
          new DropdownItem('divider'),
          new DropdownItem('internal-link', {
            text: 'Billing Plan',
            icon: new Icon('credit-card', { cssClass: 'flex-shrink-0 me-3', size: 'md' }),
            url: 'billing-plan',
            // badge: 4,
          })
        ],
      })
    ];
  }

  private updateTheme(theme: string) {
    this.themeService.updateThemeLocal(theme);
  }

  private appltTheme() {
    this.themeService.applyTheme();
    this.themeService.attachThemeChangeListner();
  }
}
