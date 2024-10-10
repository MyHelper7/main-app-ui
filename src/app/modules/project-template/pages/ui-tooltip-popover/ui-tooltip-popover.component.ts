import { Component } from '@angular/core';
import { PopoverComponent, TooltipComponent } from '../../../../core';
import { ButtonComponent } from "../../../../core/components/button/button.component";

@Component({
  selector: 'app-ui-tooltip-popover',
  standalone: true,
  imports: [TooltipComponent, PopoverComponent, ButtonComponent],
  templateUrl: './ui-tooltip-popover.component.html',
  styleUrl: './ui-tooltip-popover.component.scss'
})
export class UITooltipPopoverComponent {

}
