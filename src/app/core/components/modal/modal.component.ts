import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, TemplateRef } from '@angular/core';
import { ModalService } from '../../services';
import { DynamicContentComponent } from '../dynamic-content/dynamic-content.component';
import { ModalAnimation, ModalSize } from '../../adapters';

@Component({
  selector: 'core-modal',
  standalone: true,
  imports: [CommonModule, DynamicContentComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() id: string = 'defaultId';
  @Input() placement: 'centered' | '' = ''; // Modal placement
  @Input() size: ModalSize = 'md';
  @Input() backdrop: boolean = true;
  @Input() closeOnBackdropClick: boolean = true; // Close on backdrop click
  @Input() closable: boolean = true;
  @Input() closeOnKeyboard: boolean = true;
  @Input() animation?: ModalAnimation = '';

  @Output() onClose = new EventEmitter<void>();
  @Output() onOpen = new EventEmitter<void>();

  @ContentChild('modalHeader', { static: false, read: TemplateRef })
  headerContent!: TemplateRef<any>;
  @ContentChild('modalBody', { static: false, read: TemplateRef })
  bodyContent!: TemplateRef<any>;
  @ContentChild('modalFooter', { static: false, read: TemplateRef })
  footerContent!: TemplateRef<any>;

  public isVisible: boolean = false;
  public showModal: boolean = false;

  public modalClass!: string;
  public modalDialogClass!: string;

  constructor(
    private modalService: ModalService,
    private el: ElementRef,
    private renderer: Renderer2) {}

  ngOnInit() {
    this.modalClass = this.getModalClass();
    this.modalDialogClass = this.getModalDialogClass();

    this.modalService.onToggle.subscribe(({ id, visible }) => {
      if (id === this.id) {
        if (visible) this.show();
        if (!visible) this.close();
      }
    });
  }

  private getModalClass() {
    const baseClasses = ['modal fade'];

    if (this.isVisible) baseClasses.push('d-block');
    if (this.showModal) baseClasses.push('show');

    if (this.animation) baseClasses.push(`animate__animated animate__${this.animation}`)

    return baseClasses.join(' ');
  }

  private getModalDialogClass() {
    const baseClasses = ['modal-dialog'];

    if (this.size) baseClasses.push(`modal-${this.size}`);
    if (this.placement) baseClasses.push(`modal-dialog-${this.placement}`);

    return baseClasses.join(' ');
  }

  private toggleBodyOverflow(isOpen: boolean) {
    if (isOpen) {
      this.renderer.addClass(document.body, 'modal-open');
    } else {
      this.renderer.removeClass(document.body, 'modal-open');
    }
  }

  public show() {
    this.isVisible = true;
    this.onOpen.emit();
    this.toggleBodyOverflow(true);

    setTimeout(() => {
      this.showModal = true;
    }, 50);
  }

  public close(event?: MouseEvent) {
    event?.preventDefault();
    this.isVisible = false;
    this.onClose.emit();
    this.toggleBodyOverflow(false);
    setTimeout(() => {
      this.showModal = false;
    }, 0);
  }

  public handleBackdropClick(event: MouseEvent) {
    if (this.closeOnBackdropClick && this.closable) {
      const target = event.target as HTMLElement;
      const modalDialog = this.el.nativeElement.querySelector(`#${this.id} .modal-dialog`);

      if (this.backdrop && this.closable && modalDialog && !modalDialog.contains(target)) {
        this.close();
      }
    }
  }

  @HostListener('document:keydown.esc', ['$event'])
  onEscKey(event: KeyboardEvent) {
    if (this.closeOnKeyboard && this.closable) {
      this.close();
    }
  }
}
