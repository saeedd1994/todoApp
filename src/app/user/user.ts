import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {


  @Input() user !: {
    id: string;
    name: string;
    avatar: string;
  };
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }


  onBtnClicked() {
    this.select.emit(this.user.id)
  }
}
