import {Component} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  selectedUser = DUMMY_USERS[0];

  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar
  }

  onBtnClicked() {
    console.log('Clicked');
  }
}
