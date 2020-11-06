import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(
    private api: ApiService
  ) { }

  public getActors(): Observable<any> {
    return this.api.get("/actors", {});
  }

  public createActor(body): Observable<any> {
    return this.api.post("/actors", {
      body
    })
  }


  public updateActor(actorId: number, body): Observable<any> {
    return this.api.put("/actors/" + actorId, {
      body
    })
  }

  public deleteActor(actorId: number): Observable<any> {
    return this.api.delete("/actors/" + actorId, {});
  }
}
