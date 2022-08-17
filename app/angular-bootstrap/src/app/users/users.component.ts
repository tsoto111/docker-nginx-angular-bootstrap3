import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  newUsername: string = '';

  constructor() { }

  ngOnInit(): void {}

  /**
   * Has Username
   *
   * This function tells us if the username input is empty or not.
   *
   * @returns {boolean} True if has username and false if blank.
   */
  hasUsername = (): boolean => {
    if (this.newUsername !== '') return true;

    return false
  }

  /**
   * Reset Username
   *
   * Will empty the "newUsername" value.
   *
   * @returns {void}
   */
  resetUsername = (): void => {
    this.newUsername = '';
  }
}
