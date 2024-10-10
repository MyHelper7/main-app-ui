import { Component } from '@angular/core';
import { DropdownComponent, IDropdownItem, InputComponent } from '../../../../core';

@Component({
  selector: 'app-form-input-group',
  standalone: true,
  imports: [InputComponent, DropdownComponent],
  templateUrl: './form-input-group.component.html',
  styleUrl: './form-input-group.component.scss'
})
export class FormInputGroupComponent {
  public dropDownItems: IDropdownItem[] = [
    { text: 'Action', type: 'text' },
    { text: 'Internal Link', url: '/template/analytics', type: 'internal-link' },
    { text: 'External Link', url: 'https://demos.themeselection.com', type: 'external-link' },
    { type: 'divider' },
    { text: 'Action Click', action: () => { console.log('Click')}, type: 'button' },
  ];
}
