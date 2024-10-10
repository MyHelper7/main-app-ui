import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions, SweetAlertPosition, SweetAlertResult } from 'sweetalert2';

export type AlertOptions = SweetAlertOptions;
export type AlertPosition = SweetAlertPosition;
export type AlertResult = SweetAlertResult;

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {}

  // Generic alert method
  showAlert(config: SweetAlertOptions): Promise<SweetAlertResult> {
    return Swal.fire(config);
  }

  // Method to show success alerts
  showSuccess(title: string, text?: string, footer?: string, html?: string, position: SweetAlertPosition = 'center'): Promise<SweetAlertResult> {
    return this.showAlert({
      icon: 'success',
      title: title,
      text: text,
      footer: footer,
      html: html,
      position: position,
    });
  }

  // Method to show error alerts
  showError(title: string, text?: string, footer?: string, html?: string, position: SweetAlertPosition = 'center'): Promise<SweetAlertResult> {
    return this.showAlert({
      icon: 'error',
      title: title,
      text: text,
      footer: footer,
      html: html,
      position: position,
    });
  }

  // Method to show warning alerts
  showWarning(title: string, text?: string, footer?: string, html?: string, position: SweetAlertPosition = 'center'): Promise<SweetAlertResult> {
    return this.showAlert({
      icon: 'warning',
      title: title,
      text: text,
      footer: footer,
      html: html,
      position: position,
    });
  }

  // Method to show info alerts
  showInfo(title: string, text?: string, footer?: string, html?: string, position: SweetAlertPosition = 'center'): Promise<SweetAlertResult> {
    return this.showAlert({
      icon: 'info',
      title: title,
      text: text,
      footer: footer,
      html: html,
      position: position,
    });
  }

  // Method to show question alerts
  showQuestion(title: string, text?: string, footer?: string, html?: string, position: SweetAlertPosition = 'center'): Promise<SweetAlertResult> {
    return this.showAlert({
      icon: 'question',
      title: title,
      text: text,
      footer: footer,
      html: html,
      position: position,
    });
  }

  // Method for confirmation dialogs
  showConfirmation(
    title: string,
    text: string,
    confirmButtonText: string = 'Yes',
    cancelButtonText: string = 'No',
    position: SweetAlertPosition = 'center'
  ): Promise<SweetAlertResult> {
    return this.showAlert({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      position: position,
    });
  }
}
