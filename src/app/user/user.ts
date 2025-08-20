import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {

  @Input() avatar!: string;
  @Input() name!: string;
  @Input({required: true}) id !: string;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }


  onBtnClicked() {
    this.select.emit(this.id)
  }
}
