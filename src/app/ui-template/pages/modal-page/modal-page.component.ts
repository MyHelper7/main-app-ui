import { Component, ViewChild } from '@angular/core';
import { ButtonComponent, ModalComponent } from '../../../core/components';

@Component({
  selector: 'app-modal-page',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './modal-page.component.html',
  styleUrl: './modal-page.component.scss',
})
export class ModalPageComponent {
  @ViewChild(ModalComponent) modal!: ModalComponent;

  isModalOpen = false;

  openModal() {
    this.modal.show();
  }

  closeModal() {
    this.modal.hide();
  }

  toggleModal() {
    this.modal.toggle();

    console.log(this.modal.isVisible());
    console.log(this.modal.isHidden());
  }

  handleModalHide() {
    console.log('Modal hidden');
  }
}
