import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { DynamicContentComponent } from '../dynamic-content/dynamic-content.component';
import { IconComponent } from '../icon/icon.component';
import { DynamicContent, InputGroupAction, InputLayout, InputOption, InputOptionValue, InputShape, InputSize, InputType } from '../../adapters';

@Component({
  selector: 'core-input',
  standalone: true,
  imports: [CommonModule, DynamicContentComponent, IconComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {
  @Input() id: string | undefined = '';
  @Input() type: InputType = 'text';
  @Input() size: InputSize | undefined = 'md';
  @Input() shape: InputShape | undefined = '';
  @Input() placeholder: string | undefined = '';
  @Input() readonly: boolean | undefined = false;
  @Input() disabled: boolean | undefined = false;
  @Input() plaintext: boolean | undefined = false;

  @Input() options: InputOption[] | undefined = []; // select | multiselect | datalist
  @Input() selectedOption: InputOption | null  | undefined= null; // select | multiselect | datalist
  @Input() selectedOptionValue: InputOptionValue | undefined = ''; // select | multiselect | datalist
  @Input() rows: number | undefined = 5; // textarea
  @Input() checked: boolean | undefined = false; // radio | checkbox
  @Input() inline: boolean | undefined = false; // radio | checkbox
  @Input() accept: string | undefined = ''; // file

  @Input() layout: InputLayout | undefined = 'vertical';
  @Input() layoutcssClass: string | undefined = '';

  @Input() labelcssClass: string | undefined = '';
  @Input() inputContainercssClass: string | undefined = '';
  @Input() inputcssClass: string | undefined = '';

  @Input() inputGroupAction: InputGroupAction | undefined = ''; // Input Group

  @Input() floating: boolean | undefined = false; // Vertical Layout
  @Input() labelWidth: number | undefined = 2; // Horizontal Layout
  @Input() inputWidth: number | undefined = 10; // Horizontal Layout

  @Input() showError: boolean = false;
  @Input() showSuccess: boolean = false;

  @ContentChild('label') label: DynamicContent = '';
  @ContentChild('helpText') helpText: DynamicContent = '';
  
  @ContentChild('startInputGroupHTML') startInputGroupHTML: TemplateRef<any> | '' = '';
  @ContentChild('endInputGroupHTML') endInputGroupHTML: TemplateRef<any> | '' = '';
  @ContentChild('startInputGroupContent') startInputGroupContent: TemplateRef<any> | '' = '';
  @ContentChild('endInputGroupContent') endInputGroupContent: TemplateRef<any> | '' = '';
  
  @ContentChild('customSuccessMessage') customSuccessMessage: TemplateRef<any> | '' = '';
  @ContentChild('customErrorMessage') customErrorMessage: TemplateRef<any> | '' = '';

  @Output() toogleActionClick = new EventEmitter();

  private toogleActionTemplate: boolean = false;

  public fieldId!: string;

  get inputGroupEnabled() {
    return this.startInputGroupContent || this.endInputGroupContent ||this.startInputGroupHTML || this.endInputGroupHTML || this.inputGroupAction;
  }

  get inputContainerClass() {
    const baseClasses = [];
    if (this.inputGroupEnabled || this.inputGroupAction) {
      baseClasses.push('input-group');
      if (this.inputGroupEnabled) baseClasses.push('input-group-merge');
      if (this.size) baseClasses.push(`input-group-${this.size}`);
    } else {
      switch (this.type) {
        case 'checkbox':
        case 'radio':
          baseClasses.push('form-check');
          if (this.inline) baseClasses.push('form-check-inline');
          break;
        case 'switch':
          baseClasses.push('form-check');
          baseClasses.push('form-switch');
          break;
        default:
          baseClasses.push('form-label');
          break;
      }
    }

    if (this.floating) baseClasses.push('form-floating');
    if (this.inputContainercssClass) baseClasses.push(this.inputContainercssClass);
    return baseClasses.join(' ');
  }

  get labelClass() {
    const baseClasses = [];
    if (['checkbox', 'radio', 'switch'].includes(this.type)) baseClasses.push('form-check-label');
    if (this.labelcssClass) baseClasses.push(this.labelcssClass);
    return baseClasses.join(' ');
  }

  get inputClass() {
    const baseClasses = [];
    let inputTypeClass = '';
    switch (this.type) {
      case 'select':
      case 'multiselect':
        inputTypeClass = 'form-select';
        break;
      case 'checkbox':
      case 'radio':
      case 'switch':
        inputTypeClass = 'form-check-input';
        break;
      default:
        inputTypeClass = 'form-control';
        break;
    }

    if (this.plaintext) baseClasses.push(`${inputTypeClass}-plaintext`);
    else baseClasses.push(inputTypeClass);

    if (this.size && !this.inputGroupEnabled) baseClasses.push(`form-control-${this.size}`);
    if (this.shape === 'rounded') baseClasses.push('rounded-pill');
    if (this.inputcssClass) baseClasses.push(this.inputcssClass);

    if (this.showError) baseClasses.push('is-invalid');

    if (this.showSuccess) baseClasses.push('is-valid');

    return  baseClasses.join(' ');
  }

  get inputType() {
    if (this.type === 'switch') return 'checkbox';
    if (this.type === 'multiplefile') return 'file';
    if (this.inputGroupAction === 'password' && this.toogleActionTemplate) return 'text';
    if (this.inputGroupAction === 'password' && !this.toogleActionTemplate) return 'password';
    return this.type;
  }

  get labelAfterInput() {
    if (['checkbox', 'radio', 'switch'].includes(this.type) || this.floating) return true;
    return false;
  }

  get toogleActionIcon() {
    let icon = '';
    if (this.inputGroupAction === 'password') {
      icon = this.toogleActionTemplate ? 'show' : 'hide';
    }

    if (this.inputGroupAction === 'search') {
      icon = 'search';
    }

    return icon;
  }

  ngOnInit(): void {
    if (!this.selectedOption && this.selectedOptionValue) {
      this.selectedOption = this.options?.find((option: InputOption) => option.value == this.selectedOptionValue) || null;
    }

    if (this.disabled) this.readonly = this.disabled;
    if (this.readonly) this.disabled = this.readonly;

    if (this.type === 'password') this.inputGroupAction = 'password';
    if (this.type === 'search') this.inputGroupAction = 'search';

    this.fieldId = this.id ? this.id : `random_${Math.random()}`;
  }

  public updateActionFlag() {
    this.toogleActionTemplate = !this.toogleActionTemplate;
    this.toogleActionClick?.emit(this.toogleActionTemplate);
  }
}
