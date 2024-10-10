import { IAvatar, Icon, IDropdownItem, IIcon } from "../../core";

export interface INavbarOption {
  type: 'dropdown';
  text?: string;
  icon?: IIcon;
  avatar?: IAvatar;
  cssClass?: string;
  items?: IDropdownItem[];
}

export class NavbarOption implements INavbarOption {
  public type!: 'dropdown';
  public text?: string;
  public icon?: Icon;
  public avatar?: IAvatar;
  public cssClass?: string;
  public items?: IDropdownItem[];

  constructor(data: INavbarOption) {
    this.type = data.type;
    this.text = data.text;
    this.icon = data.icon;
    this.avatar = data.avatar;
    this.cssClass = data.cssClass;
    this.items = data.items;
  }
}