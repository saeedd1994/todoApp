import {Component} from '@angular/core';
import {Header} from './header/header';
import {User} from './user/user';
import {DUMMY_USERS} from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  user = DUMMY_USERS
}
