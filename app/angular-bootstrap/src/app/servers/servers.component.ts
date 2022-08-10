import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',   // NOTE: Select html element by tag (Most common for components!)
  // selector: '[app-servers]', // NOTE: Select html by attribute
  selector: '.app-servers',     // NOTE: Select html by css class
  template: `
            <app-server></app-server>
            <app-server></app-server>
            <app-server></app-server>
            `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
