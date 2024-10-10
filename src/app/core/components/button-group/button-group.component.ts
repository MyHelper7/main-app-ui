import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DropdownComponent } from "../dropdown/dropdown.component";
import { IButtonGroup } from '../../adapters';

@Component({
  selector: 'core-button-group',
  standalone: true,
  imports: [CommonModule, DropdownComponent],
  templateUrl: './button-group.component.html',
})
export class ButtonGroupComponent {
  @Input() buttons: IButtonGroup[] = [];

  public buttonClass(button: IButtonGroup) {
    const baseClasses: string[] = ['btn'];

    if (button.outline) baseClasses.push(`btn-outline-${button.variant}`);
    else if (button.label) baseClasses.push(`btn-label-${button.variant}`);
    else if (!button.variant) baseClasses.push('btn-primary');
    else baseClasses.push(`btn-${button.variant}`);

    return baseClasses.join(' ');
  }
}
