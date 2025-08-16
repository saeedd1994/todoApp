import {Component, computed, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  selectedUser = signal(DUMMY_USERS[0]);

  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar)

  onBtnClicked() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
