import {Component, Inject, OnInit} from '@angular/core';
import {ActorsService} from "../../services/actors/actors.service";
import {Actor, Movie} from "../../interfaces";
import {MoviesService} from "../../services/movies/movies.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-actors-movie-modal',
  templateUrl: './actors-movie-modal.component.html',
  styleUrls: ['./actors-movie-modal.component.scss']
})
export class ActorsMovieModalComponent implements OnInit {
  public allActors: Array<Actor>

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      actors: Actor[],
      movieId: number
    },
    private self: MatDialogRef<ActorsMovieModalComponent>,
    private actorsService: ActorsService,
    private moviesService: MoviesService
  ) {
  }

  ngOnInit() {
    console.log(this.data.actors)
    this.getAllActors()
  }


  public getAllActors() {
    this.actorsService.getActors().subscribe(res => {
      this.allActors = res
    })
  }

  public addActorToFilm(event) {
    this.moviesService.movieActor(event.id, this.data.movieId, "add").subscribe(res => {
      if (this.data.actors == null) {
        this.data.actors = []
      }

      this.data.actors.push(event)
    })
  }

  public deleteActor(actorId: number) {
    this.moviesService.movieActor(actorId, this.data.movieId, "remove").subscribe(res => {
      if (res) {
        this.data.actors = this.data.actors.filter(el => el.id != actorId);
      }
    })
  }

}
