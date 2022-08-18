import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './forms/password-input/password-input.component';

@NgModule({
  // NOTE: Register New Component Modules here!
  declarations: [
    AppComponent,
    PasswordInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
