import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setInLocalStorage(key: string, value: Object) {
    const storageValue = typeof value != "string" ? JSON.stringify(value) : value;
    window.localStorage.setItem(key, storageValue);
  }

  public getFromLocalStorage(key: string) {
    return window.localStorage.getItem(key);
  }

  public deleteFromLocalStorage(key: string) {
    window.localStorage.removeItem(key);
  }

  public clearAllLocalStorage() {
    window.localStorage.clear();
  }
}
