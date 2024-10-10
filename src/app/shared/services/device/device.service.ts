import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private deviceOnline = new Subject<any>();

  private BREAKPOINTS = {
    MS_MIN: 480,
    XS_MAX: 768,
    SM_MIN: 768,
    SM_MAX: 991,
    MD_MIN: 991,
    MD_MAX: 1199,
    LG_MIN: 1199
  };

  constructor() {}

  public onDeviceStatusChange(): Observable<any>{ 
    return this.deviceOnline.asObservable();
  }

  public isExtraSmallDevice() {
    return this.getWindowWidth() < this.BREAKPOINTS.XS_MAX;
  }

  public isSmallDevice() {
    return this.getWindowWidth() < this.BREAKPOINTS.SM_MAX;
  }

  public isMediumDevice() {
    return this.getWindowWidth() < this.BREAKPOINTS.MD_MAX;
  }

  public isLargeDevice() {
    return this.getWindowWidth() >= this.BREAKPOINTS.LG_MIN;
  }

  public getWindowWidth() {
    return window.innerWidth;
  }

  public bindDeviceChangeEvents() {
    fromEvent(window, 'online').subscribe(e => {
      this.notifyDeviceStatusChange(true);
    });

    fromEvent(window, 'offline').subscribe(e => {
      this.notifyDeviceStatusChange(false);
    });
  }

  public isDeviceOnline() {
    return navigator.onLine;
  }

  public isDeviceOffline() {
    return !this.isDeviceOnline();
  }

  public notifyDeviceStatusChange(isOnline: boolean) {
    this.deviceOnline.next(isOnline);
  }

  public getDimension() {
    return {
      width: window.screen.width,
      height: window.screen.height
    }
  }
}
