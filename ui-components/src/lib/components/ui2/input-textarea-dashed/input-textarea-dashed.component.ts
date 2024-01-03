import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'digex-task-input-textarea-dashed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-textarea-dashed.component.html',
  styleUrl: './input-textarea-dashed.component.css',
})
export class InputTextareaDashedComponent {
  @Input() label="";
  @Input() content:string[]=[];
}
