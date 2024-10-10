import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new Subject<any>();
  private themeKey = 'theme';

  public THEME = { DARK: 'dark', LIGHT: 'light', AUTO: 'auto' };

  constructor(private storageService: StorageService, private meta: Meta) { }

  public isSyncSupported() {
    return window.matchMedia;
  }

  public onOsThemeChange(): Observable<any>{ 
    return this.themeSubject.asObservable();
  }

  public attachThemeChangeListner() {
    if (!this.isSyncSupported()) return;

    var $this = this;
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if ($this.getCurrentTheme() != $this.THEME.AUTO) {
       return;
      }
      const theme = e.matches ? $this.THEME.DARK : $this.THEME.LIGHT;
      $this.changeTheme(theme);
      $this.themeSubject.next(theme);
    });
  }

  public applyTheme() {
    let theme = this.getCurrentTheme();
    if (theme == this.THEME.AUTO) {
      theme = this.detectOSTheme();
    }

    this.changeTheme(theme);
  }

  public updateThemeLocal(theme: string) {
    this.changeTheme(theme);
    this.storageService.setInLocalStorage(this.themeKey, theme);
  }

  public getCurrentTheme(): string {
    return (this.storageService.getFromLocalStorage(this.themeKey)) || '';
  }

  private detectOSTheme() {
    if (!this.isSyncSupported()) {
      return this.THEME.LIGHT;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? this.THEME.DARK : this.THEME.LIGHT;
  }

  private changeTheme(theme: string) {
    const darkTheme = 'theme-dark';
    let colorMode = '#FFFFFF';
    const colorThemeMeta = ['theme-color', 'msapplication-navbutton-color', 'apple-mobile-web-app-status-bar-style'];

    switch(theme) {
      case this.THEME.DARK:
        colorMode = '#202124';
        document.body.classList.add(darkTheme);
        break;
      case this.THEME.LIGHT:
      default:
        document.body.classList.remove(darkTheme);
    }

    for (let metaTag of colorThemeMeta) {
      this.meta.updateTag({ name: metaTag, content: colorMode });
    }
  }
}
