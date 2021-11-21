import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { Page404Component } from './components/page404/page404.component';
import { AccountComponent } from './components/account/account.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { HomeComponent } from "./components/home/home.component";
import { RequestFormComponent } from "./forms/request-form/request-form.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    NavComponent,
    LoginComponent,
    AccountComponent,
    RequestFormComponent,
    SignupFormComponent
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
