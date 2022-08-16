import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BootstrapAlertComponent } from './bootstrap-alert/bootstrap-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapAlertComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
