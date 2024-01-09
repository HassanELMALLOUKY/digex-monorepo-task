import { Component, EventEmitter, Input, NgZone, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { ArrayToStringPipe } from '../../../../../../apps/letters-management/src/app/pipes/array-to-string.pipe';
import { LetterManagementService } from 'apps/letters-management/src/app/services/letter-management.service';

@Component({
  selector: 'digex-task-input-textarea-dashed',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule,ArrayToStringPipe],
  template: `
    <div class="custom-textarea" [style.width.%]="50">
      <label>{{ label }}</label>
      <textarea rows="{{numberOfRows}}">{{ inputValue | arrayToString:'\n' }}</textarea>
    </div>
  `,
  styleUrl: './input-textarea-dashed.component.css',
})
export class InputTextareaDashedComponent {
  constructor(private letterService:LetterManagementService) {}
  @Input() label="";
  @Input() numberOfRows!:number;
  @Input() inputValue!:string[];
}
