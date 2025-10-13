import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {INewTaskModel} from './models/inew-task-model';

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

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<INewTaskModel>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  cancelTask() {
    this.cancel.emit();
  }

  onSubmit() {
    const newTask : INewTaskModel = {
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date: this.enteredDate
    }
    this.add.emit(newTask)
  }
}
