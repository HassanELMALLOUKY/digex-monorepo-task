import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'digex-task-input-textarea-dashed',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="custom-textarea" [style.width.%]="50">
      <label>{{ label }}</label>
      <textarea [(ngModel)]="inputValue" (input)="onInput()" placeholder="">{{ content.join("\\n") }}</textarea>
    </div>
  `,
  styleUrl: './input-textarea-dashed.component.css',
})
export class InputTextareaDashedComponent {
  @Input() label="";
  @Input() content:string[]=[];

  inputValue = '';

  @Output() dataChanged = new EventEmitter<string>();

  onInput() {
    this.dataChanged.emit(this.inputValue);
  }
}
