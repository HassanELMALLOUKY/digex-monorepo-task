import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'digex-task-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  template: `<mat-card class="example-card">
    <mat-card-header>
      <mat-card-title>Letter {{count}}</mat-card-title>
      <mat-card-subtitle>{{first_line}}</mat-card-subtitle>
    </mat-card-header>
    <br>
    <mat-card-content>
      {{Subject}}
    </mat-card-content>
  </mat-card>`,
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() count=2;
  @Input() first_line="First line of receiver address";
  @Input() Subject="This is an example subject line"

}
