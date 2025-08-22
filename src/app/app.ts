import {Component} from '@angular/core';
import {Header} from './header/header';
import {User} from './user/user';
import {DUMMY_USERS} from './dummy-users';
import {Tasks} from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  user = DUMMY_USERS
  selectedId: string = '';

  get selectedName() {
    return this.user.find((user) => user.id === this.selectedId);
  }

  selectedUser(id: string) {
    this.selectedId = id;
  }
}
