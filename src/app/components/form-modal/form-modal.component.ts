import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.css'
})
export class FormModalComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<FormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
  }


  public myForm: FormGroup = this.fb.group({
    name: [this.data.user.first_name, [Validators.required]],
    last_name: [this.data.user.last_name, [Validators.required]],
    email: [this.data.user.email, [Validators.required]]
  })

  ngOnInit(): void {
    console.log(this.data)
  }

  @Output()
  public newUserData: EventEmitter<IUser> = new EventEmitter<IUser>()

  changeUserData(): void {
    this.newUserData.emit(this.data.user)
  }

}
