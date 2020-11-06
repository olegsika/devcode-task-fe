import {Component, OnInit} from '@angular/core';
import {Actor} from '../interfaces';
import {ActorsService} from '../services/actors/actors.service';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {EditActorModalComponent} from "./edit-actor-modal/edit-actor-modal.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";


@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  public actors: Array<Actor>

  constructor(
    private actorsService: ActorsService,
    private modal: MatDialog,
    private router: Router,
) {
  }

  ngOnInit() {
    this.getActors();
  }

  public getActors() {
    this.actorsService.getActors().subscribe(res => {
      this.actors = res
    });
  }

  public addNewActor() {
    this.modal.open(EditActorModalComponent, {
      width: '500px',
    }).afterClosed().subscribe(res => {
      if (res) {
        this.getActors()
      }
    })
  }

  public updateActor(actor) {
    this.modal.open(EditActorModalComponent, {
      width: '500px',
      data: actor
    }).afterClosed().subscribe(res => {
      if (res) {
        this.getActors()
      }
    });
  }

  public deleteActor(actorId: number) {
    this.actorsService.deleteActor(actorId).subscribe(res => {
      this.getActors();
    });
  }

  public showMovies() {
    this.router.navigate(['/']);
  }
}
