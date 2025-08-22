import {Component, EventEmitter, Input, Output} from '@angular/core';

interface IUser {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  @Input() user !: IUser;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }


  onBtnClicked() {
    this.select.emit(this.user.id)
  }
}
