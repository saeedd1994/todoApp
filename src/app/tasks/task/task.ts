import {Component, Input} from '@angular/core';
import {type ITask} from './task.model';
import {Card} from '../../shared/card/card';
import {DatePipe} from '@angular/common';
import {TasksService} from '../tasks.service';


@Component({
  selector: 'app-task',
  imports: [
    Card,
    DatePipe
  ],
  templateUrl: './task.html',
  standalone: true,
  styleUrl: './task.scss'
})
export class Task {
  constructor(private tasksService: TasksService) {}
  @Input() task!: ITask;
  onCompleteClicked() {
    this.tasksService.removeTask(this.task.id);
  }
}
