import {Component, Input} from '@angular/core';
import {type ITask} from './task.model';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  standalone: true,
  styleUrl: './task.scss'
})
export class Task {
  @Input() task!: ITask;
}
