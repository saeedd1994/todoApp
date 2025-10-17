import {Component, Input} from '@angular/core';
import {Task} from './task/task';
import {NewTask} from './new-task/new-task';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [
    Task,
    NewTask
  ],
  templateUrl: './tasks.html',
  standalone: true,
  styleUrl: './tasks.scss'
})
export class Tasks {

  @Input() name?: string;
  @Input() userId!: string;
  constructor(private tasksService: TasksService) {}

  isAddNewTask = false

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);

  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id)
  }

   addNewTask() {
    this.isAddNewTask = true;
  }

  onCloseAddTask() {
    this.isAddNewTask = false;
  }
}
