import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  newUsername: string = 'newusername@example.com';

  constructor() { }

  ngOnInit(): void {}

  onUpdateUsername(event: Event) {
    const usernameInputElement = <HTMLInputElement>event.target;

    this.newUsername = usernameInputElement.value;
  }
}
