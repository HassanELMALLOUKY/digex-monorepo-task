import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';


export type ButtonStyle="primary"|"secondary";

@Component({
  selector: 'digex-task-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text = "New Letter";
  @Input() color:ButtonStyle="primary";


}
