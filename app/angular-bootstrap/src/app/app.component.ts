import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bootstrap';
  passwordValue: string = ''
  confirmPasswordValue: string = ''

  getPasswordValue = (passwordValue: string) => {
    console.log(passwordValue)
    this.passwordValue = passwordValue;
  }

  getConfirmPasswordValue = (confirmPasswordValue: string) => {
    this.confirmPasswordValue = confirmPasswordValue;
  }

  doPasswordsMatch = (): boolean => {
    if (this.passwordValue === '' || this.confirmPasswordValue === '') return false;

    return this.passwordValue === this.confirmPasswordValue;
  }
}
