import {Component, EventEmitter, Input, Output} from '@angular/core';
import {type ITask} from './task.model';
import {Card} from '../../shared/card/card';
import {DatePipe} from '@angular/common';


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
  @Input() task!: ITask;
  @Output() complete = new EventEmitter<string>();

  onCompleteClicked() {
    this.complete.emit(this.task.id)
  }
}
