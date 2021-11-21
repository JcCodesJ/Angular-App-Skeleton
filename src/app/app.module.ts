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
import { SecuredReqFormComponent } from './requests-services-ect/secured-req-form/secured-req-form.component';
import { RoutingComponent } from './components/routing/routing.component';
import { ApiRequestComponent } from './requests-services-ect/api-request/api-request.component';
import { RezDetailsComponent } from './requests-services-ect/reservation/rez-details/rez-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    NavComponent,
    LoginComponent,
    AccountComponent,
    RequestFormComponent,
    SignupFormComponent,
    SecuredReqFormComponent,
    RoutingComponent,
    ApiRequestComponent,
    RezDetailsComponent
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
