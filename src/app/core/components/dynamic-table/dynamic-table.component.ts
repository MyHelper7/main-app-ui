import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { DynamicContentComponent } from '../dynamic-content/dynamic-content.component';
import { IconComponent } from '../icon/icon.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { BadgeComponent } from '../badge/badge.component';
import { ButtonComponent } from '../button/button.component';
import { TableColumn, TableRow, TableSize } from '../../adapters';

@Component({
  selector: 'core-dynamic-table',
  standalone: true,
  imports: [
    CommonModule,
    DynamicContentComponent,
    IconComponent,
    DropdownComponent,
    BadgeComponent,
    ButtonComponent,
  ],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent implements OnInit {
  @Input() theme: 'dark' | '' = '';
  @Input() size: TableSize = '';

  @Input() striped: boolean = false;
  @Input() hover: boolean = false;
  @Input() responsive: boolean = false;

  @Input() borderedType: 'bordered' | 'borderless' | '' = '';

  @Input() caption: TemplateRef<any> | string = '';

  @Input() header: TableColumn[] = [];
  @Input() data: TableRow[] = [];
  @Input() footer: string[] = [];

  public sortedData: TableRow[] = [];
  public sortDirection: { [key: string]: boolean } = {};

  public tableClass!: string;

  ngOnInit() {
    this.sortedData = [...this.data];
    this.tableClass = this.getTableClass();
  }

  public sortData(column: TableColumn) {
    console.log(`Sorting for column:`, column);
    if (column.order === 'asc') column.order = 'desc';
    else if (column.order === 'desc') column.order = 'asc';
  }

  public handleAction(actionType: string, row: TableRow) {
    console.log(`Action: ${actionType} for row:`, row);
  }

  public bodyRowClass(row: any) {
    const baseClasses = [];

    if (row['rowStyle']) baseClasses.push(`table-${row['rowStyle']}`);
    
    return baseClasses.join(' ');
  }

  private getTableClass() {
    const baseClasses = ['table'];

    if (this.theme) baseClasses.push(`table-${this.theme}`);
    if (this.borderedType) baseClasses.push(`table-${this.borderedType}`);
    if (this.size) baseClasses.push(`table-${this.size}`);
    

    if (this.striped) baseClasses.push('table-striped');
    if (this.hover) baseClasses.push('table-hover');

    return baseClasses.join(' ');
  }
}
