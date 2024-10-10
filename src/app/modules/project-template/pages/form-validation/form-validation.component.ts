import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputComponent } from '../../../../core';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.scss'
})
export class FormValidationComponent {

}
