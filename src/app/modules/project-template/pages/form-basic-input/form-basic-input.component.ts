import { Component } from '@angular/core';
import { InputComponent, InputOption } from '../../../../core';

@Component({
  selector: 'app-form-basic-input',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './form-basic-input.component.html',
  styleUrl: './form-basic-input.component.scss'
})
export class FormBasicInputComponent {
  public selectOptions: InputOption[] = [
    { label: 'Select', value: '' },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
  ]
}
