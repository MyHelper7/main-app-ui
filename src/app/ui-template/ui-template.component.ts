import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ui-template',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './ui-template.component.html',
  styleUrl: './ui-template.component.scss',
})
export class UiTemplateComponent {}
