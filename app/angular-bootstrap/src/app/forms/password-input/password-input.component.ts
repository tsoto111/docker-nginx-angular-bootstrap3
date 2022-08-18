import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent implements OnInit {
  @Input() label: string = ''
  @Output() getPasswordValueEvent = new EventEmitter<string>();

  passwordValue: string = '';
  showPassword: boolean = false;
  showHideCount: number = 0;

  constructor() {}

  ngOnInit(): void {}

  getPasswordValue = () => {
    this.getPasswordValueEvent.emit(this.passwordValue)
  }

  /**
   * Get Password Input Type
   *
   * This function will toggle the password form input type
   * depnding on the current state of the showPassword boolean.
   *
   * @returns {string}
   */
  getPasswordInputType = (): string => {
    return this.showPassword === true ? 'text' : 'password';
  }

  /**
   * Toggle Password Visibility
   *
   * Toggles the class variable of showPassword on button click
   * to show/hide password input text.
   *
   * @returns {void}
   */
  togglePasswordVisibility = (): void => {
    this.showHideCount += 1;
    this.showPassword = !this.showPassword
  }
}
