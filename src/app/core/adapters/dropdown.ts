import { TemplateRef } from "@angular/core";
import { IIcon } from "./icon";

export type DropdownDirection = 'auto' | 'top' | 'bottom' | 'start' | 'left' | 'end' | 'right' | 'top-start' | 'top-left' | 'top-end' | 'top-right' | 'bottom-start' | 'bottom-left' | 'bottom-end' | 'bottom-right' | 'start-top' | 'left-top' | 'start-bottom' | 'left-bottom' | 'end-top' | 'right-top' | 'end-bottom' | 'right-bottom';
export type DropdownType = 'button' | 'internal-link' | 'external-link' | 'text' | 'template' | 'header' | 'divider';

export interface IDropdownItem {
  text?: string;
  icon?: IIcon;
  template?: TemplateRef<any>;
  label?: boolean;
  outline?: boolean;
  url?: string;
  action?: ($event?: MouseEvent) => void;
  type: DropdownType;
}

export class DropdownItem implements IDropdownItem {
  public text?: string;
  public icon?: IIcon;
  public template?: TemplateRef<any>;
  public label?: boolean;
  public outline?: boolean;
  public header?: boolean;
  public url?: string;
  public action?: () => void;
  public type!: DropdownType;

  constructor(type: DropdownType, data?: Omit<IDropdownItem, 'type'>) {
    this.type = type;

    this.text = data?.text;
    this.icon = data?.icon;
    this.label = data?.label;

    if (type === 'button') {
      this.outline = data?.outline;
      this.action = data?.action;
    } else if (type === 'template') {
      this.template = data?.template;
    } else if (type === 'internal-link' || type === 'external-link') {
      this.url = data?.url;
    }
  }
}

