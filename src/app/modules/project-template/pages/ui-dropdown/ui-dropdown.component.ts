import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ButtonComponent, DropdownComponent, DropdownItem, Icon, IDropdownItem } from '../../../../core';

@Component({
  selector: 'app-ui-dropdown',
  standalone: true,
  imports: [DropdownComponent, ButtonComponent],
  templateUrl: './ui-dropdown.component.html',
  styleUrl: './ui-dropdown.component.scss'
})
export class UIDropdownComponent implements OnInit {
  @ViewChild('customOptionTemplate', { static: true }) customOptionTemplate!: TemplateRef<any>;

  public dropDownItems: IDropdownItem[] = [
    new DropdownItem('text', { text: 'Action' }),
    new DropdownItem('internal-link', { text: 'Internal Link', url: '/template/analytics' }),
    new DropdownItem('external-link', { text: 'External Link', url: 'https://demos.themeselection.com' }),
    new DropdownItem('divider'),
    new DropdownItem('button', { text: 'Action Click', action: () => { console.log('Click')} }),
  ];

  public dropDownItemsWithIcon: IDropdownItem[] = [
    new DropdownItem('header', { text: 'Header' }),
    new DropdownItem('text', { text: 'Action' }),
    new DropdownItem('internal-link', { text: 'Internal Link', url: '/template/analytics', icon: new Icon('chevron-right', { cssClass: 'scaleX-n1-rtl' }) }),
    new DropdownItem('external-link', { text: 'External Link', url: 'https://demos.themeselection.com', icon: new Icon('chevron-right', { cssClass: 'scaleX-n1-rtl' }) }),
    new DropdownItem('divider'),
    new DropdownItem('button', { text: 'Action Click', action: () => { console.log('Click')} }),
  ];

  public dropDownItemsWithTemplate: IDropdownItem[] = [];

  ngOnInit(): void {
    this.dropDownItemsWithTemplate = [
      new DropdownItem('header', { text: 'Header' }),
      new DropdownItem('template', { template: this.customOptionTemplate }),
      new DropdownItem('divider'),
      new DropdownItem('button', { text: 'Action Click', action: () => { console.log('Click')} }),
    ];
  }

}
