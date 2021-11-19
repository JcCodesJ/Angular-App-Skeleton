import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  // {path: '', component: HomeComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'profile', component: ProfileComponent, canActivate: [LoggedGuard] },
  // {path: '404', component: Page404Component},
  // {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
