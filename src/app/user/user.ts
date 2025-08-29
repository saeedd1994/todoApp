import {Component, EventEmitter, Input, Output} from '@angular/core';
import {type IUser} from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  @Input() user !: IUser;
  @Input() selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }


  onBtnClicked() {
    this.select.emit(this.user.id)
  }
}
