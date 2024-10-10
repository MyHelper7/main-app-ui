import { Injectable } from '@angular/core';
import { BrandConfig } from '../../components';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private titleService: Title) { }

  public addClassToBody(cssClass: string) {
    document.body.classList.add(cssClass);
  }

  public removeClassToBody(cssClass: string) {
    document.body.classList.remove(cssClass);
  }

  public getAppDetail(): BrandConfig {
    return {
      name: environment.appName,
      logo: { type: 'image', url: 'img/icons/unicons/wallet.png'},
      url: '/',
      external: true,
    };
  }

  public setPageTitle(title?: string) {
    title = this.generateTitle(title);
    this.titleService.setTitle(title);
  }

  private generateTitle(title?: string): string {
    const appDetail = this.getAppDetail();
    const titleStr = title ? `${title} | ` : '';
    return `${titleStr}${appDetail.name}`;
  }
}
