import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';


export type ButtonStyle="primary"|"secondary";

@Component({
  selector: 'digex-task-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: '<button mat-raised-button [color]="color">{{buttonText}}</button>',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() buttonText:string = "";
  @Input() color:ButtonStyle="primary";


}
