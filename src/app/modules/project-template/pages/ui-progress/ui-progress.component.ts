import { Component } from '@angular/core';
import { ProgressbarComponent } from '../../../../core';

@Component({
  selector: 'app-ui-progress',
  standalone: true,
  imports: [ProgressbarComponent],
  templateUrl: './ui-progress.component.html',
  styleUrl: './ui-progress.component.scss'
})
export class UIProgressComponent {

}
