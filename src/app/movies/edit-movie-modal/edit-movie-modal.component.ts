import {Component, Inject, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies/movies.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-movie-modal',
  templateUrl: './edit-movie-modal.component.html',
  styleUrls: ['./edit-movie-modal.component.scss']
})
export class EditMovieModalComponent implements OnInit {

  public title = "Create new movie"

  public subscriber: any;

  public action: any = {
    create: (params) => {
      return this.moviesService.createMovie(params);
    },
    update: (params) => {
      return this.moviesService.updateMovie(this.data.id, params);
    },
  };

  public newMovie: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(255)
    ]),
    year: new FormControl('', [Validators.required]),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private moviesService: MoviesService,
    private self: MatDialogRef<EditMovieModalComponent>,
    private snack: MatSnackBar,
  ) {
  }

  ngOnInit() {
    if (this.data) {
      this.title = 'Edit Movie';
      for (const name in this.data) {

        if (!this.data.hasOwnProperty(name)) {
          continue;
        }

        const control = this.newMovie.get(name);

        if (!control) {
          continue;
        }

        control.patchValue(this.data[name]);
      }
    }
  }

  public addNewMovie () {
    if (this.newMovie.valid) {

      let action = this.action.create;

      let id = '';

      if (this.data) {
        action = this.action.update;
      }

      this.subscriber = action(this.newMovie.value).subscribe(result => {
        if (result) {
          this.self.close(result);
        }
      }, error => {
        this.snack.open("Something Went Wrong", "Ok", {
          duration:5000,
        })
      });
    }
  }

}
