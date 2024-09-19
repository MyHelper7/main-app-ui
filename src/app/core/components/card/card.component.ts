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
    const baseCardClass = 'card';
    const themeClass =
      this.theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark';
    this.cardClasses = `${baseCardClass} ${themeClass} ${this.customClass}`;

    this.headerClasses = this.headerContent
      ? `card-header ${this.customHeaderClass}`
      : '';
    this.footerClasses = this.footerContent
      ? `card-footer ${this.customFooterClass}`
      : '';
  }
}
