export interface IAvatar {
  type: string;
  url: string;
  cssClass?: string;
}

export class Avatar implements IAvatar {
  public type: string = 'avatar';
  public url!: string;
  public cssClass?: string;

  constructor(url: string, data?: Omit<IAvatar, 'type' | 'url'>) {
    this.url = url;
    this.cssClass = data?.cssClass || '';
  }
}