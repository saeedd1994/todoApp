import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Output() complete = new EventEmitter<string>();

  onCompleteClicked() {
    this.complete.emit(this.task.id)
  }
}
