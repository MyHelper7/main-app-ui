import { Component } from '@angular/core';
import { CardComponent } from '../../../core/components';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.scss',
})
export class CardPageComponent {}
