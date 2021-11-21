import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignupFormComponent} from "./forms/signup-form/signup-form.component";
import {AccountComponent} from "./components/account/account.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {Page404Component} from "./components/page404/page404.component";
import {LoggedGuard} from "./guards/logged.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountComponent, canActivate: [LoggedGuard] },
  {path: 'signup-form', component: SignupFormComponent,},
  {path: '404', component: Page404Component},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
