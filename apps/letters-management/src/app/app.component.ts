import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from '../../../../ui-components/src/lib/components/ui1/button/button.component';
import { CardComponent } from '../../../../ui-components/src/lib/components/ui1/card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { Location, NgIf } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent,
    RouterModule,
    ButtonComponent,
    MatButtonModule,
    CardComponent,
    MatIconModule, NgIf, 
    MatDialogModule

  ],
  selector: 'digex-task-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  implements OnInit{

  constructor(private location: Location) {
  }

  letterCount: number = 0;
  title = 'letters-management';
  buttonText: string="Create New Letter";

  ngOnInit(): void {

  }
  isHome(): boolean {
    return this.location.path() === '';
  }

}
