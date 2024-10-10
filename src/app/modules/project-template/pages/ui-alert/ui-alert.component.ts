import { Component } from '@angular/core';
import { AlertComponent } from '../../../../core';

@Component({
  selector: 'app-ui-alert',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './ui-alert.component.html',
  styleUrl: './ui-alert.component.scss'
})
export class UIAlertComponent {

}
