import {Component, EventEmitter, Input, Output} from '@angular/core';
import {type IUser} from './user.model';
import {Card} from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [
    Card
  ],
  templateUrl: './user.html',
  standalone: true,
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
