export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark';
export type BadgeSize = 'sm' | 'lg' | '';
export type BadgeType = 'dot' | 'notifications' | '';

export interface IBadge {
  type: string;
  text: string | number;
  cssClass?: string;
  variant?: BadgeVariant;
  label?: boolean;
  size?: BadgeSize;
  rounded?: boolean;
}

export class Badge implements IBadge {
  public type: string = 'badge';
  public text: string | number;
  public cssClass?: string;
  public variant?: BadgeVariant;
  public size?: BadgeSize;
  public label?: boolean;
  public rounded?: boolean;

  constructor(data: Omit<IBadge, 'type'>) {
    this.text = data.text;
    this.cssClass = data.cssClass;
    this.variant = data.variant;
    this.size = data.size;
    this.label = data.label;
    this.rounded = data.rounded;
  }
}
