import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bootstrap-alert',
  templateUrl: './bootstrap-alert.component.html',
  styleUrls: ['./bootstrap-alert.component.css']
})
export class BootstrapAlertComponent implements OnInit {
  @Input() bootstrapAlertType: string;

  alertTypeClass: string;

  constructor() {}

  ngOnInit(): void {
    this.alertTypeClass = this.initBootstrapAlertType(this.bootstrapAlertType);
  }

  /**
   * Init Bootstrap Alert Type
   *
   * Returns the appropriate bootstrap 3 css alert class based off of the supported alert type
   * case values of 'danger', 'info', 'warning', and 'success'.
   *
   * @param   {string} alertType String representation of the target bootstrap alert type style
   *                             of 'danger', 'info', 'warning', or 'success'.
   * @returns {string}           The css class of the appropriate bootstrap css class given passed
   *                             in alert type.
   */
  initBootstrapAlertType = (alertType: string): string => {
    let result = undefined;

    switch(alertType) {
      case 'danger':
        result = 'alert-danger';
        break;
      case 'info':
        result = 'alert-info';
        break;
      case 'warning':
        result = 'alert-warning';
        break;
      case 'success':
        result = 'alert-success';
        break;
      default:
        result = 'alert-info';
        console.warn('Warning: Alert type of "' + alertType + '" is not a supported alert type of the bootstrap alert component.')
        break;
    }

    return result;
  }
}
