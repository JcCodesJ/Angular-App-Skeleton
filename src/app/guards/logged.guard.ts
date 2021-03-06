import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs';
import {SessionService} from "../requests-services-ect/services/api_service/session.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor( private router: Router, private _sServ: SessionService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this._sServ.isLogged() ){
        return true;
      }
      else {
        this.router.navigateByUrl("");
        return false;
      }
  }

}
