import { Component } from '@angular/core';
import { AlertPosition, AlertService } from '../../../../core/services';

@Component({
  selector: 'app-sweetalert',
  standalone: true,
  imports: [],
  templateUrl: './sweetalert.component.html',
  styleUrl: './sweetalert.component.scss'
})
export class SweetalertComponent {

  constructor(private alertService: AlertService) {}

  positionAlert(position: AlertPosition) {
    this.alertService.showSuccess('Operation Successful', 'Positioning', '', '', position);
  }

  showSuccessAlert() {
    this.alertService.showSuccess('Operation Successful', 'Your data has been saved successfully.', 'Footer text', '<b>HTML content</b>')
      .then((result) => {
        if (result.isConfirmed) {
          console.log('Confirmed');
        }
      });
  }

  showErrorAlert() {
    this.alertService.showError('Error Occurred', 'Please try again later.', 'Error footer', '<i>Some HTML content</i>');
  }

  showWarningAlert() {
    this.alertService.showWarning('Warning', 'This is a warning message.', 'Warning footer');
  }

  showInfoAlert() {
    this.alertService.showInfo('Information', 'This is some informative text.', 'Info footer');
  }

  showQuestionAlert() {
    this.alertService.showQuestion('Are you sure?', 'Do you want to proceed?', 'Yes', 'No');
  }

  showConfirmation() {
    this.alertService.showConfirmation('Are you sure?', 'Do you want to proceed?')
      .then((result) => {
        if (result.isConfirmed) {
          console.log('Confirmed');
        } else {
          console.log('Cancelled');
        }
      });
  }
}
