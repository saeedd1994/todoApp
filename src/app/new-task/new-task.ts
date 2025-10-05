import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  standalone: true,
  styleUrl: './new-task.scss'
})
export class NewTask {

  @Output() cancel = new EventEmitter<void>();

  cancelTask() {
    this.cancel.emit();
  }
}
