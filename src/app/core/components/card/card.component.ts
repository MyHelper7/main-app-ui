import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'Card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements AfterContentInit {
  @Input() theme: 'light' | 'dark' = 'light'; // Default to light theme
  @Input() customHeaderClass: string = '';
  @Input() customFooterClass: string = '';
  @Input() customClass: string = ''; // For additional custom classes

  @ContentChild('cardHeader', { static: false, read: TemplateRef })
  headerContent!: TemplateRef<any>;
  @ContentChild('cardBody', { static: false, read: TemplateRef })
  bodyContent!: TemplateRef<any>;
  @ContentChild('cardFooter', { static: false, read: TemplateRef })
  footerContent!: TemplateRef<any>;

  cardClasses: string = '';
  headerClasses: string = '';
  footerClasses: string = '';

  ngAfterContentInit() {
    this.updateClasses();
  }

  private updateClasses() {
    const baseCardClass = 'rounded-lg shadow-md border';
    const themeClass =
      this.theme === 'dark'
        ? 'bg-gray-800 text-gray-200 border-gray-700'
        : 'bg-white text-gray-900 border-gray-200';
    this.cardClasses = `${baseCardClass} ${themeClass} ${this.customClass}`;

    this.headerClasses = this.headerContent
      ? `p-4 border-b ${this.customHeaderClass}`
      : '';
    this.footerClasses = this.footerContent
      ? `p-4 border-t ${this.customFooterClass}`
      : '';
  }
}
