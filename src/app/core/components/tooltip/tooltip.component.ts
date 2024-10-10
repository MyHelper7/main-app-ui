import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TooltipAutoClose, TooltipPlacement } from '../../adapters';

@Component({
  selector: 'core-tooltip',
  standalone: true,
  imports: [CommonModule, NgbTooltip],
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent implements OnInit {
  @Input() autoClose: TooltipAutoClose = true;
  @Input() placement: TooltipPlacement = 'top';
  @Input() tooltipContent: string | TemplateRef<any> = '';
  @Input() tooltipClass: string = '';

  public buttonClass!: string;
  
  ngOnInit(): void {
  }
}
