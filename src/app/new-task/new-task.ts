import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

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
  enteredTitle = '';
  enteredSummary = '';
  enteredData = '';

  cancelTask() {
    this.cancel.emit();  }

  onSubmit() {

  }
}
