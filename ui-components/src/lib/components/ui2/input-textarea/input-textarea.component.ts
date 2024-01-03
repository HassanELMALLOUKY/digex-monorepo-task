import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'digex-task-input-textarea',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './input-textarea.component.html',
  styleUrl: './input-textarea.component.css',
})
export class InputTextareaComponent {
  @Input() label:string="Label";

}
