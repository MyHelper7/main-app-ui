import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { PopoverAutoClose, PopoverPlacement } from '../../adapters';

@Component({
  selector: 'core-popover',
  standalone: true,
  imports: [CommonModule, NgbPopover],
  templateUrl: './popover.component.html',
})
export class PopoverComponent implements OnInit {
  @Input() placement: PopoverPlacement = 'top';
  @Input() autoClose: PopoverAutoClose = true;
  @Input() popoverTitle: string | TemplateRef<any> = '';
  @Input() popoverContent: string | TemplateRef<any> = '';
  @Input() popoverClass: string = '';

  public buttonClass!: string;

  ngOnInit(): void {
  }
}
