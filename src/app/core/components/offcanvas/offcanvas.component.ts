import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { OffcanvasService } from '../../services';
import { CommonModule } from '@angular/common';
import { DynamicContentComponent } from '../dynamic-content/dynamic-content.component';

@Component({
  selector: 'core-offcanvas',
  standalone: true,
  imports: [CommonModule, DynamicContentComponent],
  templateUrl: './offcanvas.component.html',
})
export class OffcanvasComponent {
  @Input() id: string = 'defaultOffcanvas';
  @Input() position: 'start' | 'end' | 'top' | 'bottom' = 'start';
  @Input() backdrop: boolean = true; // Enable backdrop
  @Input() closeOnBackdropClick: boolean = true; // Close on backdrop click
  
  @ContentChild('offcanvasTitle', { static: false }) titleTemplate!: TemplateRef<any>;
  @ContentChild('offcanvasContent', { static: false }) contentTemplate!: TemplateRef<any>;

  public isVisible: boolean = false;

  public offcanvasClass!: string;

  constructor(private offCanvasService: OffcanvasService) {}

  ngOnInit() {
    this.offcanvasClass = this.getOffcanvasClass();
    this.offCanvasService.onToggle
      .subscribe(({ id, visible }) => {
        if (id === this.id) {
          this.isVisible = visible;
        }
      });
  }

  private getOffcanvasClass() {
    const baseClasses = ['offcanvas'];

    if (this.position) baseClasses.push(`offcanvas-${this.position}`);

    return baseClasses.join(' ');
  }


  public close() {
    this.offCanvasService.hide(this.id);
  }

  public handleBackdropClick() {
    if (this.closeOnBackdropClick) {
      this.close();
    }
  }
}
