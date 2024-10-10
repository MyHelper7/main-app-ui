import { Component } from '@angular/core';
import { DynamicTableComponent, TableColumn } from '../../../../core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-basic',
  standalone: true,
  imports: [CommonModule, DynamicTableComponent],
  templateUrl: './table-basic.component.html',
  styleUrl: './table-basic.component.scss'
})
export class TableBasicComponent {
  public tableHeader: TableColumn[] = [
    { label: 'Project', key: 'project', sortable: true, order: 'asc', type: 'string' },
    { label: 'Client', key: 'client', sortable: true, order: 'desc' },
    { label: 'Status', key: 'status', type: 'badge', sortable: true },
    { label: 'Action 1', key: 'action1', type: 'dropdown' },
    { label: 'Action 2', key: 'action2', type: 'button-list' }
  ];

  public tableData = [
    {
      project: '<h6>Angular Project</h6>',
      client: 'Albert Cook',
      status: { variant: 'primary', value: 'Active', label: true },
      actionType: 'list',
      action1: {
        cssClass: 'p-0',
        items: [
          { text: 'Edit', type: 'edit', action: () => console.log('Edit') },
          { text: 'Delete', type: 'delete', action: () => console.log('Delete') }
        ]
      },
      action2: [
        { content: 'Edit', type: 'button', variant: 'primary', cssClass: 'me-2', size: 'sm' },
        { content: 'Delete', type: 'button', variant: 'danger', cssClass: 'me-2', outline: true, size: 'sm' },
        { content: 'View', type: 'button', variant: 'success', label: true, size: 'sm' },
      ]
    },
    {
      project: 'React Project',
      client: 'Barry Hunter',
      status: { variant: 'success', value: 'Completed', label: true },
      actionType: 'dropdown',
      action1: {
        cssClass: 'p-0',
        items: [
          { text: 'Edit', type: 'edit', action: () => console.log('Edit') },
          { text: 'Delete', type: 'delete', action: () => console.log('Delete') }
        ]
      },
      action2: [
        { content: 'Edit', type: 'button', variant: 'primary', cssClass: 'me-2', size: 'sm' },
        { content: 'Delete', type: 'button', variant: 'danger', cssClass: 'me-2', outline: true, size: 'sm' },
        { content: 'View', type: 'button', variant: 'success', label: true, size: 'sm' },
      ]
    },
    {
      project: 'NodeJS Project',
      client: 'Albert Cook',
      status: { variant: 'primary', value: 'Active', rounded: true },
      actionType: 'list',
      action1: {
        cssClass: 'p-0',
        items: [
          { text: 'Edit', type: 'edit', action: () => console.log('Edit') },
          { text: 'Delete', type: 'delete', action: () => console.log('Delete') }
        ]
      },
      action2: [
        { content: 'Edit', type: 'button', variant: 'primary', cssClass: 'me-2', size: 'sm' },
        { content: 'Delete', type: 'button', variant: 'danger', cssClass: 'me-2', outline: true, size: 'sm' },
        { content: 'View', type: 'button', variant: 'success', label: true, size: 'sm' },
      ]
    },
    {
      project: 'Ruby on Rails Project',
      client: 'Albert Cook',
      status: { variant: 'danger', value: 'Inactive', rounded: true, label: true },
      action1: {
        cssClass: 'p-0',
        items: [
          { text: 'Edit', type: 'edit', action: () => console.log('Edit') },
          { text: 'Delete', type: 'delete', action: () => console.log('Delete') }
        ]
      },
      action2: [
        { content: 'Edit', type: 'button', variant: 'primary', cssClass: 'me-2', size: 'sm' },
        { content: 'Delete', type: 'button', variant: 'danger', cssClass: 'me-2', outline: true, size: 'sm' },
        { content: 'View', type: 'button', variant: 'success', label: true, size: 'sm' },
      ]
    },
  ];

  public tableHeader2 = [
    { label: 'Table heading 1', key: 'data1' },
    { label: 'Table heading 2', key: 'data2' },
    { label: 'Table heading 3', key: 'data3' },
    { label: 'Table heading 4', key: 'data4' },
    { label: 'Table heading 5', key: 'data5' },
    { label: 'Table heading 6', key: 'data6' },
    { label: 'Table heading 7', key: 'data7' },
    { label: 'Table heading 8', key: 'data8' },
    { label: 'Table heading 9', key: 'data9' },
    { label: 'Table heading 10', key: 'data10' },
    { label: 'Table heading 11', key: 'data11' },
  ];
  public tableData2 = [
    { data1: 'Table Data 1', data2: 'Table Data 2', data3: 'Table Data 3', data4: 'Table Data 4', data5: 'Table Data 5', data6: 'Table Data 6', data7: 'Table Data 7', data8: 'Table Data 8', data9: 'Table Data 9', data10: 'Table Data 10', data11: 'Table Data 11' },
    { data1: 'Table Data 1', data2: 'Table Data 2', data3: 'Table Data 3', data4: 'Table Data 4', data5: 'Table Data 5', data6: 'Table Data 6', data7: 'Table Data 7', data8: 'Table Data 8', data9: 'Table Data 9', data10: 'Table Data 10', data11: 'Table Data 11' },
    { data1: 'Table Data 1', data2: 'Table Data 2', data3: 'Table Data 3', data4: 'Table Data 4', data5: 'Table Data 5', data6: 'Table Data 6', data7: 'Table Data 7', data8: 'Table Data 8', data9: 'Table Data 9', data10: 'Table Data 10', data11: 'Table Data 11' },
    { data1: 'Table Data 1', data2: 'Table Data 2', data3: 'Table Data 3', data4: 'Table Data 4', data5: 'Table Data 5', data6: 'Table Data 6', data7: 'Table Data 7', data8: 'Table Data 8', data9: 'Table Data 9', data10: 'Table Data 10', data11: 'Table Data 11' },
  ];

  public tableData3 = [
    {
      project: 'Angular Project',
      client: 'Albert Cook',
      status: 'Active',
      rowStyle: 'default'
    },
    {
      project: 'Angular Project',
      client: 'Albert Cook',
      status: 'Active',
      rowStyle: 'active'
    },
    {
      project: 'Angular Project',
      client: 'Albert Cook',
      status: 'Active',
      rowStyle: 'primary'
    },
    {
      project: 'Angular Project',
      client: 'Albert Cook',
      status: 'Active',
      rowStyle: 'secondary'
    },
    {
      project: 'Angular Project',
      client: 'Albert Cook',
      status: 'Active',
      rowStyle: 'success'
    },
    {
      project: 'Angular Project',
      client: 'Albert Cook',
      status: 'Active',
      rowStyle: 'danger'
    },
    {
      project: 'Angular Project',
      client: 'Albert Cook',
      status: 'Active',
      rowStyle: 'warning'
    },
    {
      project: 'Angular Project',
      client: 'Albert Cook',
      status: 'Active',
      rowStyle: 'info'
    },
    {
      project: 'Angular Project',
      client: 'Albert Cook',
      status: 'Active',
      rowStyle: 'default'
    },
    {
      project: 'Angular Project',
      client: 'Albert Cook',
      status: 'Active',
      rowStyle: 'light'
    },
    {
      project: 'Angular Project',
      client: 'Albert Cook',
      status: 'Active',
      rowStyle: 'dark'
    },
  ];

  public tableFooter = ['Total Projects', '2', '', '', ''];
}
