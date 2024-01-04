import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'digex-task-input-single-line',
  standalone: true,
  imports: [CommonModule, MatInputModule],
  templateUrl: './input-single-line.component.html',
  styleUrl: './input-single-line.component.css',
})
export class InputSingleLineComponent {
  @Input() label:string="Label";
  @Input() placeHolder:string="Write Something";
  @Input() value: string="";

}
