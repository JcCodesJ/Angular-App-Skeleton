import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { ComponentsComponent } from './components/components.component';
import { NavComponent } from './components/nav/nav.component';
import { Page404Component } from './components/page404/page404.component';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComponentsComponent,
    NavComponent,
    Page404Component,
    AccountComponent,
    // HomeComponent,
    // Page404Component,
    // NavComponent,
    // LoginComponent,
    // ProfileComponent,
    // RequestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
