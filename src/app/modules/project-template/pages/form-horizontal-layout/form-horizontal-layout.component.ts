import { Component } from '@angular/core';
import { DynamicFormComponent, IForm, InputComponent } from '../../../../core';

@Component({
  selector: 'app-form-horizontal-layout',
  standalone: true,
  imports: [InputComponent, DynamicFormComponent],
  templateUrl: './form-horizontal-layout.component.html',
  styleUrl: './form-horizontal-layout.component.scss'
})
export class FormHorizontalLayoutComponent {
  public formConfig1: IForm = {
    name: 'sampleForm',
    fields: [
      {
        type: "text",
        id: "basic-default-name",
        placeholder: "John Doe",
        label: "Name",
        layout: 'horizontal',
        labelWidth: 2,
        inputWidth: 10,
      },
      {
        type: "text",
        id: "basic-default-company",
        placeholder: "ACME Inc.",
        label: "Company",
        layout: 'horizontal',
        labelWidth: 2,
        inputWidth: 10
      },
      {
        type: 'email',
        id: 'basic-default-email',
        placeholder: 'john.doe',
        label: 'Email',
        endInputGroupHTML: 'example.com',
        helpText:' You can use letters, numbers & periods',
        layout: 'horizontal',
        labelWidth: 2,
        inputWidth: 10
      },
      {
        type: 'text',
        id: 'basic-default-phone',
        placeholder: '658 799 8941',
        label: 'Phone No',
        layout: 'horizontal',
        labelWidth: 2,
        inputWidth: 10
      },
      {
        type: 'textarea',
        id: 'basic-default-message',
        placeholder: 'Hi, Do you have a moment to talk Joe?',
        label: 'Message',
        layout: 'horizontal',
        labelWidth: 2,
        inputWidth: 10
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
        layout: 'horizontal',
        labelWidth: 2,
        inputWidth: 10,
        startInputGroupHTML: "<i class='bx bx-user'></i>",
      },
      {
        type: "text",
        id: "basic-default-company",
        placeholder: "ACME Inc.",
        label: "Company",
        layout: 'horizontal',
        labelWidth: 2,
        inputWidth: 10,
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
        layout: 'horizontal',
        labelWidth: 2,
        inputWidth: 10
      },
      {
        type: 'text',
        id: 'basic-default-phone',
        placeholder: '658 799 8941',
        label: 'Phone No',
        startInputGroupHTML: "<i class='bx bx-phone'></i>",
        layout: 'horizontal',
        labelWidth: 2,
        inputWidth: 10
      },
      {
        type: 'textarea',
        id: 'basic-default-message',
        placeholder: 'Hi, Do you have a moment to talk Joe?',
        label: 'Message',
        startInputGroupHTML: "<i class='bx bx-comment'></i>",
        layout: 'horizontal',
        labelWidth: 2,
        inputWidth: 10
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
