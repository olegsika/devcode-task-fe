import {Component, OnInit} from '@angular/core';
import {Movie, Actor} from '../interfaces';
import {MoviesService} from "../services/movies/movies.service";
import {MatDialog} from "@angular/material/dialog";
import {EditMovieModalComponent} from "./edit-movie-modal/edit-movie-modal.component";
import {Router} from "@angular/router";
import {ActorsMovieModalComponent} from "./actors-movie-modal/actors-movie-modal.component";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies: Array<Movie>

  constructor(
    private moviesService: MoviesService,
    private modal: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getMovies()
  }


  public getMovies() {
    this.moviesService.getMovies().subscribe(res => {
      this.movies = res
    })
  }

  public createMovie() {
    this.modal.open(EditMovieModalComponent, {
      width:'500px',
    }).afterClosed().subscribe(res => {
      if (res) {
        this.getMovies()
      }
    })
  }

  public editMovie(movie) {
    this.modal.open(EditMovieModalComponent, {
      width:"500px",
      data: movie
    }).afterClosed().subscribe(res => {
      if (res) {
        this.getMovies()
      }
    })
  }

  public deleteMovie(movieId: number) {
    this.moviesService.deleteMovie(movieId).subscribe(res => {
      if (res) {
        this.getMovies();
      }
    })
  }

  public actorsAction(movieId: number, actors) {
    this.modal.open(ActorsMovieModalComponent, {
      width: '500px',
      data: {
        movieId: movieId,
        actors: actors,
      }
    })
  }

  public showActors() {
    this.router.navigate(['/actors'])
  }
}
