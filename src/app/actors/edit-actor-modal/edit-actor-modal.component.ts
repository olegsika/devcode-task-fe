import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActorsService} from "../../services/actors/actors.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-actor-modal',
  templateUrl: './edit-actor-modal.component.html',
  styleUrls: ['./edit-actor-modal.component.scss']
})
export class EditActorModalComponent implements OnInit {

  public title = "Create new actor"

  public subscriber: any;

  public newActor: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(255)
    ]),
  });

  public action: any = {
    create: (params) => {
      return this.actorsService.createActor(params);
    },
    update: (params) => {
      return this.actorsService.updateActor(this.data.id, params);
    },
  };


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private actorsService: ActorsService,
    private self: MatDialogRef<EditActorModalComponent>,
    private snack: MatSnackBar,
  ) { }

  ngOnInit() {
    if (this.data) {
      this.title = 'Edit Movie';
      for (const name in this.data) {

        if (!this.data.hasOwnProperty(name)) {
          continue;
        }

        const control = this.newActor.get(name);

        if (!control) {
          continue;
        }

        control.patchValue(this.data[name]);
      }
    }
  }

  public addNewActor () {
    if (this.newActor.valid) {

      let action = this.action.create;

      let id = '';

      if (this.data) {
        action = this.action.update;
      }

      this.subscriber = action(this.newActor.value).subscribe(result => {
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
