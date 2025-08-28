import {Component, Input} from '@angular/core';
import {Task} from '../task/task';

@Component({
  selector: 'app-tasks',
  imports: [
    Task
  ],
  templateUrl: './tasks.html',
  standalone: true,
  styleUrl: './tasks.scss'
})
export class Tasks {

  @Input() name?: string;

}
