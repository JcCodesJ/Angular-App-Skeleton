import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RoomForm} from "../../models/room-form.model";
import {Room} from "../../models/room.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private _apiUrl = "http://localhost:8080/room";

  constructor(private _client: HttpClient) { }

  getAll() : Observable<Room[]>{
    return this._client.get( this._apiUrl ) as Observable<Room[]>;
  }

  postRoom(toPost: RoomForm) : Observable<Room>{
    return this._client.post( this._apiUrl, toPost ) as Observable<Room>;
  }

}
