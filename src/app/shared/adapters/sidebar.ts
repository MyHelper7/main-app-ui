import { IBadge } from "../../core";

export type SidebarTarget = '_blank' | '_self' | '_parent' | '_top';

export interface SidebarMenuItem {
  title: string;
  icon?: string;
  badge?: IBadge;
  active?: boolean;
  link?: string;
  target?: SidebarTarget;
  external?: boolean;
  open?: boolean;
  header?: boolean;
  subItems?: Omit<SidebarMenuItem, 'subItems' | 'header' | 'open'>[];
}

export class MenuItem implements SidebarMenuItem {
  title: string;
  icon?: string;
  badge?: IBadge;
  open?: boolean;
  active?: boolean;
  subItems?: MenuItem[];
  header?: boolean;
  link?: string;
  target?: SidebarTarget;
  external?: boolean;

  constructor(data: SidebarMenuItem) {
    this.title = data.title;
    this.icon = data.icon;
    this.badge = data.badge;
    this.open = data.open;
    this.active = data.active;
    this.header = data.header;
    this.link = data.link;
    this.target = data.target;
    this.external = data.external;

    this.subItems = data.subItems?.map(subItem => new MenuItem(subItem as SidebarMenuItem)) || [];
  }
}
