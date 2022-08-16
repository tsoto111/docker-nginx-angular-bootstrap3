import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverID: number = 7;
  serverStatus: string = 'Offline';

  /**
   * Get Server Status
   *
   * This is an example of how to write a function in
   * typescript. This specific method will return the pre-set
   * class variable serverStatus defined above.
   *
   * @returns {string} The pre-set serverStatus value in this class.
   */
  getServerStatus(): string {
    return this.serverStatus;
  }
}
