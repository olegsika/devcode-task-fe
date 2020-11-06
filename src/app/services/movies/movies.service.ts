import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private api: ApiService
  ) { }

  public getMovies(): Observable<any> {
    return this.api.get("/movies", {});
  }

  public createMovie(body): Observable<any> {
    return this.api.post("/movies", {
      body
    })
  }

  public updateMovie(movieId: number, body): Observable<any> {
    return this.api.put("/movies/" + movieId, {
      body
    })
  }

  public deleteMovie(movieId: number): Observable<any> {
    return this.api.delete("/movies/" + movieId, {});
  }

  public movieActor(actorId: number, movieId: number, action: string): Observable<any> {
    return this.api.post("/movies/" + movieId + "/" + actorId + "/" + action, {})
  }

}
