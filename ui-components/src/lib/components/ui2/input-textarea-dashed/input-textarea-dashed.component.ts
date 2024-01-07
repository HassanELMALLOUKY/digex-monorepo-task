import { Component, EventEmitter, Input, NgZone, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { ArrayToStringPipe } from '../../../../../../apps/letters-management/src/app/pipes/array-to-string.pipe';

@Component({
  selector: 'digex-task-input-textarea-dashed',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule,ArrayToStringPipe],
  template: `
    <div class="custom-textarea" [style.width.%]="50">
      <label>{{ label }}</label>
      <textarea rows="{{numberOfRows}}">{{ inputValue | arrayToString }}</textarea>
    </div>
  `,
  styleUrl: './input-textarea-dashed.component.css',
})
export class InputTextareaDashedComponent {
  @Input() label="";
  @Input() numberOfRows!:number;
  @Input() inputValue:any[] = [];

  @Output() dataChanged = new EventEmitter<any[]>();

  onInput() {
    this.dataChanged.emit(this.inputValue);
  }
}
