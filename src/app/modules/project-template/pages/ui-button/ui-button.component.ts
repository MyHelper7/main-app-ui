import { Component } from '@angular/core';
import { ButtonComponent, IButtonGroup, ButtonGroupComponent, ButtonGroup } from '../../../../core';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  imports: [ButtonComponent, ButtonGroupComponent],
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.scss'
})
export class UIButtonComponent {
  public basicButtons: IButtonGroup[] = [
    new ButtonGroup({ text: 'Left', variant: 'secondary' }),
    new ButtonGroup({ text: 'Middle', variant: 'secondary' }),
    new ButtonGroup({ text: 'Right', variant: 'secondary' })
  ];

  public labelButtons: IButtonGroup[] = [
    new ButtonGroup({ text: 'Left', variant: 'secondary', label: true }),
    new ButtonGroup({ text: 'Middle', variant: 'secondary', label: true }),
    new ButtonGroup({ text: 'Right', variant: 'secondary', label: true })
  ];

  public outlineButtons: IButtonGroup[] = [
    new ButtonGroup({ text: 'Left', variant: 'secondary', outline: true }),
    new ButtonGroup({ text: 'Middle', variant: 'secondary', outline: true }),
    new ButtonGroup({ text: 'Right', variant: 'secondary', outline: true })
  ];

  public toolbarButtons1: IButtonGroup[] = [
    new ButtonGroup({ icon: 'tf-icons bx bx-bell', variant: 'secondary', outline: true }),
    new ButtonGroup({ icon: 'tf-icons bx bx-task', variant: 'secondary', outline: true }),
    new ButtonGroup({ icon: 'tf-icons bx bx-check-shield', variant: 'secondary', outline: true }),
    new ButtonGroup({ icon: 'tf-icons bx bx-comment-dots', variant: 'secondary', outline: true })
  ];

  public toolbarButtons2: IButtonGroup[] = [
    new ButtonGroup({ icon: 'tf-icons bx bx-bold', variant: 'secondary', outline: true }),
    new ButtonGroup({ icon: 'tf-icons bx bx-italic', variant: 'secondary', outline: true }),
    new ButtonGroup({ icon: 'tf-icons bx bx-underline', variant: 'secondary', outline: true })
  ];

  public toolbarButtons3: IButtonGroup[] = [
    new ButtonGroup({ icon: 'tf-icons bx bx-volume-full', variant: 'secondary' }),
  ];

  public nestedButtons: IButtonGroup[] = [
    new ButtonGroup({ icon: 'tf-icons bx bx-car', variant: 'secondary' }),
    new ButtonGroup({ icon: 'tf-icons bx bx-rocket', variant: 'secondary' }),
    new ButtonGroup({ icon: 'tf-icons bx bx-bulb', variant: 'secondary' }),
    new ButtonGroup({
      text: 'Dropdown',
      variant: 'secondary',
      dropdown: true,
      dropdownItems: [
        { text: 'Dropdown link 1', action: () => console.log('Link 1 clicked'), type: 'button' },
        { text: 'Dropdown link 2', action: () => console.log('Link 2 clicked'), type: 'button' }
      ]
    }),
  ];
}
