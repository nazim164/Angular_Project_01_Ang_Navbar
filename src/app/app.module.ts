import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
//add package
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
//
//Table Packages
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { TaBLEComponent } from './ta-ble/ta-ble.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    TaBLEComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
