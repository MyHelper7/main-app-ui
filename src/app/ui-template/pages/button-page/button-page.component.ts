import { Component } from '@angular/core';
import { ButtonComponent } from '../../../core/components';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './button-page.component.html',
  styleUrl: './button-page.component.scss',
})
export class ButtonPageComponent {}
