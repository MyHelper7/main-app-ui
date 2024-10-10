import { Component, ViewChild } from '@angular/core';
import { ModalAnimation, ModalComponent, ModalService } from '../../../../core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './ui-modal.component.html',
  styleUrl: './ui-modal.component.scss'
})
export class UIModalComponent {
  
  public selectedAnimation: any = '';

  constructor(private modalService: ModalService) {}
  isModalOpen = false;

  openModal(id: string) {
    this.modalService.show(id);
  }

  closeModal(id: string) {
    this.modalService.hide(id);
  }

  toggleModal(id: string) {
    this.modalService.toggle(id);

    // console.log(this.modal.isVisible());
    // console.log(this.modal.isHidden());
  }

  handleModalOpen() {
    console.log('Modal Open');
  }

  handleModalClose() {
    console.log('Modal Close');
  }

  onAnimationChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedAnimation = target.value; // Update selected value
    console.log('Selected animation:', this.selectedAnimation); // Optional: log the selected value
  }
}
