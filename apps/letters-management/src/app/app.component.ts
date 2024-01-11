import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from '../../../../ui-components/src/lib/components/ui1/button/button.component';
import { CardComponent } from '../../../../ui-components/src/lib/components/ui1/card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { Location, NgIf } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { LetterManagementService } from './services/letter-management.service';
import { LetterModel } from './models/letter-model';
import { of } from 'rxjs';
import { ArrayToStringPipe, FirstLinePipe } from "./pipes/array-to-string.pipe";



@Component({
    standalone: true,
    selector: 'digex-task-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterModule,
        ButtonComponent,
        MatButtonModule,
        CardComponent,
        MatIconModule, NgIf,
        MatDialogModule, ArrayToStringPipe,FirstLinePipe]
})
export class AppComponent  implements OnInit{
  protected letters: LetterModel[]=[];

  constructor(private location: Location,private letterManagementService: LetterManagementService) {
  }

  letterCount: number = 0;
  title = 'letters-management';
  buttonText: string="Create New Letter";

  ngOnInit(): void {
    this.letters = this.letterManagementService.getAllLetters();
    this.letters.forEach(letter => {
      console.log(letter);
    });
  }

  // check if the current path is home
  isHome(): boolean {
    return this.location.path() === '';
  }
}
