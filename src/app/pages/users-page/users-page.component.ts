import {Component, EventEmitter, Output} from '@angular/core';
import {ModalComponent} from "../../components/modal/modal.component";
import {UsersService} from "../../services/users-service.service";
import {IUser} from "../../interfaces/user.interface";
import {MatDialog} from "@angular/material/dialog";
import {FormModalComponent} from "../../components/form-modal/form-modal.component";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {

  public users:any= undefined

  public user: any = undefined

  constructor(private userService: UsersService, public dialog: MatDialog) {
  }
  fetchUsersData(){
    this.userService.getAllUsers().subscribe( data => {
        this.users = data;
      }
    )
  }

  singleUserID(id: number){
    this.getSingleUserInfo(id)
    this.openDialog()
  }



  getSingleUserInfo(id: number){
    this.userService.getSingleUser(id).subscribe( data => {
      this.user = data
    })
  }
  openDialog(): void {
    if(!this.user) return

    this.dialog.open(FormModalComponent, {
      width: '400px',
      data: {
        user: this.user.data
      }
    })
  }

  ngOnInit(): void {
    this.fetchUsersData()
  }
}
