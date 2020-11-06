import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MoviesComponent} from './movies/movies.component';
import {ActorsComponent} from './actors/actors.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {ApiService} from "./services/api/api.service";
import {MoviesService} from "./services/movies/movies.service";
import {ActorsService} from "./services/actors/actors.service";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import { EditMovieModalComponent } from './movies/edit-movie-modal/edit-movie-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { EditActorModalComponent } from './actors/edit-actor-modal/edit-actor-modal.component';
import { ActorsMovieModalComponent } from './movies/actors-movie-modal/actors-movie-modal.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ActorsComponent,
    EditMovieModalComponent,
    EditActorModalComponent,
    ActorsMovieModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [
    ApiService,
    MoviesService,
    ActorsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditMovieModalComponent,
    EditActorModalComponent,
    ActorsMovieModalComponent
  ]
})
export class AppModule {
}
