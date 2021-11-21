import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SessionService} from "./session.service";
import {Observable} from "rxjs";
import {Reservation} from "../../models/reservation.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly _apiUrl = "http://localhost:8080/rez"

  constructor(private _client: HttpClient, private _sServ: SessionService) { }

  public sendRezRequest(request: RezRequest) : Observable<Reservation>{
    return this._client.post(
      this._apiUrl+"/request",
      request,
      {
        headers: {
          'Authorization': this._sServ.getApiKey()
        },
        withCredentials: true
      }
    ) as Observable<Reservation>;
  }

  public getReservation(id: number): Observable<Reservation>{
    return this._client.get(this._apiUrl+'/'+id) as Observable<Reservation>
  }
}
