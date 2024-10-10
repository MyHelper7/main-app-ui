export interface TableColumn {
  label: string;
  key: string;
  type?: string | number | 'dropdown' | 'badge' | 'button-list' | 'icon';
  cssClass?: string; // Will apply on header and all rows
  sortable?: boolean;
  order?: 'asc' | 'desc';
}

export interface TableRow {
  [key: string]: any;
}

export type TableSize = 'xs' | 'sm' | 'lg' | 'xl' | '';