import { Component } from '@angular/core';
import { DynamicFormComponent, IForm, InputComponent } from '../../../../core';

@Component({
  selector: 'app-form-vertical-layout',
  standalone: true,
  imports: [InputComponent, DynamicFormComponent],
  templateUrl: './form-vertical-layout.component.html',
  styleUrl: './form-vertical-layout.component.scss'
})
export class FormVerticalLayoutComponent {

  public formConfig1: IForm = {
    name: 'sampleForm',
    fields: [
      {
        type: "text",
        id: "basic-default-name",
        placeholder: "John Doe",
        label: "Name",
        layout: "vertical"
      },
      {
        type: "text",
        id: "basic-default-company",
        placeholder: "ACME Inc.",
        label: "Company",
        layout: "vertical"
      },
      {
        type: 'email',
        id: 'basic-default-email',
        placeholder: 'john.doe',
        label: 'Email',
        endInputGroupHTML: 'example.com',
        helpText:' You can use letters, numbers & periods',
        layout: 'vertical'
      },
      {
        type: 'text',
        id: 'basic-default-phone',
        placeholder: '658 799 8941',
        label: 'Phone No',
        layout: 'vertical'
      },
      {
        type: 'textarea',
        id: 'basic-default-message',
        placeholder: 'Hi, Do you have a moment to talk Joe?',
        label: 'Message',
        layout: 'vertical'
      },
      {
        type: "select",
        id: "defaultSelect",
        label: 'Select box',
        placeholder: "Select Option",
        options: [
          { label: 'Select', value: '' },
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 3 },
        ],
        layout: 'vertical'
      },
      {
        type: "checkbox",
        label: 'Checkbox 1',
        layout: 'vertical'
      },
      {
        type: "checkbox",
        label: 'Checkbox 2',
        layout: 'vertical'
      },
      {
        type: "radio",
        label: 'Radio 1',
        layout: 'vertical'
      },
      {
        type: "radio",
        label: 'Radio 2',
        layout: 'vertical'
      },
    ],
    buttonAlignment: 'start',
    buttons: [
      {
        type: 'submit',
        content: 'Submit',
        variant: 'primary',
      },
      {
        type: 'reset',
        content: 'Reset',
        variant: 'danger',
        outline: true,
        cssClass: 'ms-3'
      },
    ]
  };

  public formConfig2: IForm = {
    name: 'sampleForm',
    fields: [
      {
        type: "text",
        id: "basic-default-name",
        placeholder: "John Doe",
        label: "Name",
        layout: "vertical",
        startInputGroupHTML: "<i class='bx bx-user'></i>",
      },
      {
        type: "text",
        id: "basic-default-company",
        placeholder: "ACME Inc.",
        label: "Company",
        layout: "vertical",
        startInputGroupHTML: "<i class='bx bx-buildings'></i>",
      },
      {
        type: 'email',
        id: 'basic-default-email',
        placeholder: 'john.doe',
        label: 'Email',
        startInputGroupHTML: "<i class='bx bx-envelope'></i>",
        endInputGroupHTML: 'example.com',
        helpText:' You can use letters, numbers & periods',
        layout: 'vertical'
      },
      {
        type: 'text',
        id: 'basic-default-phone',
        placeholder: '658 799 8941',
        label: 'Phone No',
        startInputGroupHTML: "<i class='bx bx-phone'></i>",
        layout: 'vertical'
      },
      {
        type: 'textarea',
        id: 'basic-default-message',
        placeholder: 'Hi, Do you have a moment to talk Joe?',
        label: 'Message',
        startInputGroupHTML: "<i class='bx bx-comment'></i>",
        layout: 'vertical'
      },
    ],
    buttonAlignment: 'end',
    button: {
      type: 'submit',
      content: 'Submit',
      variant: 'primary',
    },
  };
}
