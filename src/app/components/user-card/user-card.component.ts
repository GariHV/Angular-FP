import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input()
  public user: IUser | undefined = undefined


  @Output()
  public userID: EventEmitter<number> = new EventEmitter<number>()

  selectSingleUser(id: number): void {
    this.userID.emit(id)
  }


/*(newUserData)="newUserData($event)"*/
}
