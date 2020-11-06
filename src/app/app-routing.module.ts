import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import {ActorsComponent} from './actors/actors.component';


const routes: Routes = [
  { path: '', component: MoviesComponent, pathMatch: 'full' },
  { path: 'actors', component: ActorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
