export interface IBreadcrumbItem {
  type: string;
  label: string;
  url?: string;
  external?: boolean;
}

export class BreadcrumbItem implements IBreadcrumbItem {
  public type = 'breadcrumb';
  public label!: string;
  public url?: string | undefined;
  public external?: boolean | undefined;

  constructor(data: Omit<IBreadcrumbItem, 'type'>) {
    this.label = data.label;
    this.url = data.url;
    this.external = data.external;
  }
}