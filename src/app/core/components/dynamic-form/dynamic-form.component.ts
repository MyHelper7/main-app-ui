import { Component, Input, OnInit } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { DynamicContentComponent } from '../dynamic-content/dynamic-content.component';
import { IForm } from '../../adapters';

@Component({
  selector: 'core-dynamic-form',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent, DynamicContentComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  @Input() config!: IForm;

  public buttonContainerClass!: string;

  ngOnInit(): void {
    this.buttonContainerClass = this.getButtonContainerClass();
  }

  private getButtonContainerClass() {
    const baseClasses = ['d-flex'];
    if (this.config.buttonAlignment) baseClasses.push(`justify-content-${this.config.buttonAlignment}`);
    return baseClasses.join(' ');
  }
}
