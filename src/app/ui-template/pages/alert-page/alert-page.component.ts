import { Component } from '@angular/core';
import { AlertComponent } from '../../../core/components';

@Component({
  selector: 'app-alert-page',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './alert-page.component.html',
  styleUrl: './alert-page.component.scss',
})
export class AlertPageComponent {}
