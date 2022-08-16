import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  fullname: string = '';
  username: string = '';
  profileImage: string = '';

  @Input() setFullname: string;
  @Input() setUsername: string;
  @Input() setProfileImage: string;

  constructor() { }

  ngOnInit(): void {
    this.fullname = this.setFullname;
    this.username = this.setUsername;
    this.profileImage = this.setProfileImage;
  }

  ngOnChanges() {
    this.username = this.setUsername;
  }
}
