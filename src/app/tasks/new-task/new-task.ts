import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.html',
  standalone: true,
  styleUrl: './new-task.scss'
})
export class NewTask {

  @Input() userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  constructor(private tasksService: TasksService) {}


  cancelTask() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTasks({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    },this.userId)
    this.close.emit();
  }

}
