import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'Modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() id: string = 'modalEl';
  @Input() isOpen: boolean = false;
  @Input() placement: string = 'center'; // Modal placement (e.g., top-left, center-right)
  @Input() backdrop: 'static' | 'dynamic' = 'dynamic';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() backdropClasses: string = 'bg-gray-500 bg-opacity-50';
  @Input() closable: boolean = true;
  @Input() keyboardClosable: boolean = true;
  @Input() containerId?: string;

  @Output() onHide = new EventEmitter<void>();
  @Output() onShow = new EventEmitter<void>();
  @Output() onToggle = new EventEmitter<void>();

  public modalVisible: boolean = this.isOpen;

  @ContentChild('modalHeader', { static: false, read: TemplateRef })
  headerContent!: TemplateRef<any>;
  @ContentChild('modalBody', { static: false, read: TemplateRef })
  bodyContent!: TemplateRef<any>;
  @ContentChild('modalFooter', { static: false, read: TemplateRef })
  footerContent!: TemplateRef<any>;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    if (this.containerId) {
      this.moveToContainer();
    } else {
      this.appendToBody();
    }
  }

  ngOnDestroy() {
    this.removeFromContainer();
    this.toggleBodyOverflow(true);
  }

  private getModalId() {
    return this.el.nativeElement.querySelector(`#${this.id}`);
  }

  private appendToBody() {
    const modalEl = this.getModalId();
    document.body.appendChild(modalEl);
  }

  private moveToContainer() {
    const container = document.getElementById(this.containerId!);
    const modalEl = this.getModalId();
    if (container) {
      container.appendChild(modalEl);
    } else {
      console.error(`Container with ID ${this.containerId} not found.`);
      this.appendToBody();
    }
  }

  private removeFromContainer() {
    const container = document.getElementById(this.containerId!);
    if (container) {
      container.removeChild(this.el.nativeElement);
    } else {
      document.body.removeChild(this.el.nativeElement);
    }
  }

  public show() {
    this.modalVisible = true;
    this.onShow.emit();
    this.updateModalVisibility();
    this.toggleBodyOverflow(true);
  }

  public hide() {
    this.modalVisible = false;
    this.onHide.emit();
    this.updateModalVisibility();
    this.toggleBodyOverflow(false);
  }

  public toggle() {
    this.modalVisible ? this.hide() : this.show();
    this.onToggle.emit();
  }

  public onBackdropClick(event: MouseEvent) {
    const modalContentElements =
      document.getElementsByClassName('modal-content');
    const target = event.target as HTMLElement;

    // If there is a modal content element and the click is outside of it, close the modal
    for (let i = 0; i < modalContentElements.length; i++) {
      const modalContent = modalContentElements[i] as HTMLElement;
      if (
        this.backdrop === 'dynamic' &&
        this.closable &&
        !modalContent.contains(target)
      ) {
        this.hide();
        break;
      }
    }
  }

  @HostListener('document:keydown.esc', ['$event'])
  onEscKey(event: KeyboardEvent) {
    if (this.keyboardClosable && this.closable && this.modalVisible) {
      this.hide();
    }
  }

  public isVisible(): boolean {
    return this.modalVisible;
  }

  public isHidden(): boolean {
    return !this.modalVisible;
  }

  private get placementClass(): string {
    switch (this.placement) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-center':
        return 'top-0 left-1/2 transform -translate-x-1/2';
      case 'top-right':
        return 'top-0 right-0';
      case 'center':
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'bottom-center':
        return 'bottom-0 left-1/2 transform -translate-x-1/2';
      case 'bottom-right':
        return 'bottom-0 right-0';
      default:
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
    }
  }

  private get sizeClass(): string {
    switch (this.size) {
      case 'sm':
        return 'md:w-2/6';
      case 'lg':
        return 'md:w-4/6';
      case 'xl':
        return 'md:w-5/6';
      case 'md':
      default:
        return 'md:w-3/6';
    }
  }

  private updateModalVisibility() {
    const modalEl = this.getModalId();
    if (modalEl) {
      this.renderer.setStyle(
        modalEl,
        'display',
        this.modalVisible ? 'block' : 'none'
      );
    }
  }

  private toggleBodyOverflow(isOpen: boolean) {
    const body = document.body;
    if (isOpen) {
      this.renderer.addClass(body, 'overflow-hidden');
    } else {
      this.renderer.removeClass(body, 'overflow-hidden');
    }
  }

  public getModalContainerClassMap() {
    return {
      'fixed overflow-y-auto overflow-x-hidden p-4 md:inset-0 z-50 h-full w-full top-0':
        true,
      block: this.modalVisible,
      hidden: !this.modalVisible,
      [`${this.backdropClasses}`]: true,
    };
  }

  public getModalClassMap() {
    return {
      'modal-content relative max-h md:max-h-full': true,
      [`${this.sizeClass}`]: true,
      [`${this.placementClass}`]: true,
    };
  }
}
