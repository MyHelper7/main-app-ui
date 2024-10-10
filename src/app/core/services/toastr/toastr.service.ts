import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, TemplateRef } from '@angular/core';
import { ToastrComponent } from '../../components';
import { DynamicContent } from '../../adapters';

export interface ToastrOptions {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  duration?: number; // milliseconds
  animation?: boolean;
  closeEnabled?: boolean;
}

export interface GenericToastrOptions extends ToastrOptions {
  type: 'success' | 'error' | 'info' | 'warning' | 'primary';
}

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  private toastrContainers: { [key: string]: HTMLDivElement } = {};

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  private createContainer(position: string): HTMLDivElement {
    if (!this.toastrContainers[position]) {
      const toastrContainer = document.createElement('div');
      toastrContainer.id = `toast-container-${position}`;
      toastrContainer.className = `toast-container toast-${position}`;
      document.body.appendChild(toastrContainer);
      this.toastrContainers[position] = toastrContainer;
    }

    return this.toastrContainers[position];
  }

  private show(title: string, content: DynamicContent, options?: GenericToastrOptions) {
    const toastrRef = this.resolver.resolveComponentFactory(ToastrComponent).create(this.injector);

    if (!toastrRef?.instance) return;

    toastrRef.instance.title = title;
    toastrRef.instance.content = content;
    toastrRef.instance.options = { ...this.getDefaultOptions(), ...options };

    this.appRef.attachView(toastrRef.hostView);
    const toastrContainer = this.createContainer(toastrRef.instance.options.position || 'top-right');
    toastrContainer.appendChild(toastrRef.location.nativeElement);

    toastrRef.instance.onClose.subscribe(() => {
      this.cleanup(toastrRef);
    });

    if (toastrRef.instance.options?.duration) {
      setTimeout(() => {
        toastrRef.instance.close();
        this.cleanup(toastrRef);
      }, toastrRef.instance.options.duration);
    }
  }

  private cleanup(toastrRef: any) {
    this.appRef.detachView(toastrRef.hostView);
    toastrRef.destroy();
  }

  private getDefaultOptions(): GenericToastrOptions {
    return {
      position: 'top-right', // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
      duration: 3000, // Default duration set to 3 seconds
      animation: true,
      closeEnabled: true,
      type: 'primary',
    };
  }

  public success(title: string, content: DynamicContent, options?: ToastrOptions) {
    this.show(title, content, { ...options, type: 'success' });
  }

  public error(title: string, content: DynamicContent, options?: ToastrOptions) {
    this.show(title, content, { ...options, type: 'error' });
  }

  public info(title: string, content: DynamicContent, options?: ToastrOptions) {
    this.show(title, content, { ...options, type: 'info' });
  }

  public warning(title: string, content: DynamicContent, options?: ToastrOptions) {
    this.show(title, content, { ...options, type: 'warning' });
  }

  public primary(title: string, content: DynamicContent, options?: ToastrOptions) {
    this.show(title, content, { ...options, type: 'primary' });
  }
}
