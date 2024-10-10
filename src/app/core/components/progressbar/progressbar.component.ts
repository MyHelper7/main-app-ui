import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressbarSize, ProgressbarVariant } from '../../adapters';

@Component({
  selector: 'core-progressbar',
  standalone: true,
  imports: [CommonModule, NgbProgressbarModule],
  templateUrl: './progressbar.component.html',
})
export class ProgressbarComponent implements OnInit {
  @Input() variant: ProgressbarVariant = 'primary';
  @Input() size: ProgressbarSize = '';
  @Input() cssClass: string = '';
  @Input() value: number = 0;
  @Input() height: string = '';
  @Input() striped: boolean = false;
  @Input() animated: boolean = false;
  @Input() showValue: boolean = false;
  @Input() textColor: string = '';

  public progressbarClass!: string;
  
  ngOnInit(): void {
    this.progressbarClass = this.getProgressbarClass();
  }

  private getProgressbarClass(): string {
    const baseClasses: string[] = [];

    if (this.cssClass) baseClasses.push(this.cssClass);

    return baseClasses.join(' ');
  }
}
