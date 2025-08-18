import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {

  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }



  onBtnClicked() {
    console.log('clicked');
  }
}
