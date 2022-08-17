import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = 'New Server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
      },
      2000
    )
  }

  ngOnInit(): void {}

  /**
   * On Create Server
   *
   * Function that will update the "Server Creation Status"
   * to "Server was created!" when called.
   *
   * @returns {void} Updates the local new server var when
   *                 a "Create Server" event is triggered.
   */
  onCreateServer(): void {
    this.serverCreated = true;
    this.serverCreationStatus = this.serverName + ' server was created!';
    this.servers.push(this.serverName);
  }

  /**
   * On Add Server Click
   *
   * Event listener that gets triggered when the "Add Server" button
   * is clicked in the view.
   *
   * @returns {void} Entrypoint for any logic you want to trigger when
   *                 the associated button in the view is clicked.
   */
  onAddServerClick(): void {
    this.onCreateServer();
  }
}
