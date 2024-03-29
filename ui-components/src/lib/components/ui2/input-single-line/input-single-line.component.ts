import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'digex-task-input-single-line',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule],
  template: `
    <mat-form-field appearance="outline" [style.width.%]="widthSize">
      <mat-label >{{ label }}</mat-label>
      <input matInput placeholder="{{label}}"  id="{{label}}" [(ngModel)]="inputValue" (input)="onInput()">
    </mat-form-field>
  `,
  styles: ``,
})
export class InputSingleLineComponent {
  @Input() label:string="";
  @Input() placeHolder:string="";
  @Input() inputValue = '';
  @Input() widthSize= 50;

  @Output() dataChanged = new EventEmitter<string>();

  onInput() {
    this.dataChanged.emit(this.inputValue);
  }

}
