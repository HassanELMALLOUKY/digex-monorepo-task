import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'digex-task-slide-toggle',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  template: `
    <mat-slide-toggle>Preview Mode</mat-slide-toggle>
  `,
  styles: ``,
})
export class SlideToggleComponent {}
