import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'digex-task-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() count=1;
  @Input() first_line="First line of receiver address";
  @Input() Subject="This is an example subject line"

}
