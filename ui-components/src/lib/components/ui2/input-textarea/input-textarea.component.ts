import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'digex-task-input-textarea',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
  template: `
    <mat-form-field appearance="outline" [style.width.%]="50">
      <mat-label>{{ label }}</mat-label>
      <textarea [(ngModel)]="inputValue" (input)="onInput()" matInput></textarea>
    </mat-form-field>
  `,
  styles: `
  textarea{
  resize: none;
}
  `,
})
export class InputTextareaComponent {
  @Input() label:string="Label";

  inputValue = '';

  @Output() dataChanged = new EventEmitter<string>();

  onInput() {
    this.dataChanged.emit(this.inputValue);
  }

}
