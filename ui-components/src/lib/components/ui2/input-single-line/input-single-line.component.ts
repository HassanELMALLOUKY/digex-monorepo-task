import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'digex-task-input-single-line',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule],
  templateUrl: './input-single-line.component.html',
  styleUrl: './input-single-line.component.css',
})
export class InputSingleLineComponent {
  @Input() label:string="Label";
  @Input() placeHolder:string="Write Something";
  @Input() value: string="";

  inputValue = '';

  @Output() dataChanged = new EventEmitter<string>();

  onInput() {
    this.dataChanged.emit(this.inputValue);
  }

}
