export type IconName = string;
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | '';

export interface IIcon {
  type: string;
  name: IconName;
  cssClass?: string;
  size?: IconSize;
}

export class Icon implements IIcon {
  public type: string = 'icon';
  public name!: IconName;
  public cssClass?: string;
  public size?: IconSize;

  constructor(name: IconName, data?: Omit<IIcon, 'type' | 'name'>) {
    this.name = name;
    this.cssClass = data?.cssClass || '';
    this.size = data?.size || '';
  }
}
