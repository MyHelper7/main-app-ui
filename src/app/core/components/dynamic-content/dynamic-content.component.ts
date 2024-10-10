import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { DynamicContent } from '../../adapters';

@Component({
  selector: 'core-dynamic-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-content.component.html',
})
export class DynamicContentComponent {
  @Input() content?: DynamicContent;

  public isTemplateRef(content: DynamicContent): content is TemplateRef<any> {
    return content instanceof TemplateRef;
  }

  public isHtmlContent(content: DynamicContent): content is { html: string } {
    return typeof content === 'object' && 'html' in content;
  }
}
