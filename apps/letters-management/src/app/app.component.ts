import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from '../../../../ui-components/src/lib/components/ui1/button/button.component';
import { CardComponent } from '../../../../ui-components/src/lib/components/ui1/card/card.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ButtonComponent, MatButtonModule, CardComponent],
  selector: 'digex-task-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'letters-management';
}
