import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public onToggle = new EventEmitter<{ id: string; visible: boolean }>();
  private visibilityMap: { [key: string]: boolean } = {};

  toggle(id: string) {
    this.visibilityMap[id] = !this.visibilityMap[id];
    this.onToggle.emit({ id, visible: this.visibilityMap[id] });
  }

  show(id: string) {
    this.visibilityMap[id] = true;
    this.onToggle.emit({ id, visible: true });
  }

  hide(id: string) {
    this.visibilityMap[id] = false;
    this.onToggle.emit({ id, visible: false });
  }

  isOffCanvasVisible(id: string): boolean {
    return this.visibilityMap[id] || false;
  }
}
