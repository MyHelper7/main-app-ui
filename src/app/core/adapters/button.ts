import { IDropdownItem } from "./dropdown";

export type ButtonVariant = 'none' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
export type ButtonType = 'button' | 'reset' | 'submit';
export type ButtonSize = 'xs' | 'sm' | 'lg' | 'xl' | '';

export interface IButton {
  variant?: ButtonVariant;
  type?: ButtonType;
  size?: ButtonSize;
  rounded?: boolean;
  outline?: boolean;
  label?: boolean;
  text?: boolean;
  active?: boolean;
  disabled?: boolean;
  icon?: boolean;
  cssClass?: string;

  onClick?: () => void;
  content?: any;
};

export class Button implements IButton {
  public variant?: ButtonVariant;
  public type?: ButtonType;
  public size?: ButtonSize;
  public rounded?: boolean;
  public outline?: boolean;
  public label?: boolean;
  public text?: boolean;
  public active?: boolean;
  public disabled?: boolean;
  public icon?: boolean;
  public cssClass?: string;

  public onClick?: () => void;
  public content?: any;

  constructor(data: IButton) {
    this.variant = data.variant;
    this.type = data.type;
    this.size = data.size;
    this.rounded = data.rounded;
    this.outline = data.outline;
    this.label = data.label;
    this.text = data.text;
    this.active = data.active;
    this.disabled = data.disabled;
    this.icon = data.icon;
    this.cssClass = data.cssClass;
  
    this.onClick = data.onClick;
    this.content = data.content;
  }
};

export interface IButtonGroup {
  type: string;
  text?: string;
  variant?: ButtonVariant;
  icon?: string;
  label?: boolean;
  outline?: boolean;
  dropdown?: boolean;
  dropdownItems?: IDropdownItem[];
}

export class ButtonGroup implements IButtonGroup {
  public type: string = 'button-group';
  public text?: string;
  public variant?: ButtonVariant;
  public icon?: string;
  public label?: boolean;
  public outline?: boolean;
  public dropdown?: boolean;
  public dropdownItems?: IDropdownItem[];

  constructor(data: Omit<IButtonGroup, 'type'>) {
    this.text = data.text;
    this.variant = data.variant;
    this.icon = data.icon;
    this.label = data.label;
    this.outline = data.outline;
    this.dropdown = data.dropdown;
    this.dropdownItems = data.dropdownItems;
  }
}
