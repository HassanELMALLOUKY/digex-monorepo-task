import { Route } from '@angular/router';
import { CreateNewLetterComponent } from './create-new-letter/create-new-letter.component';

export const appRoutes: Route[] = [
  {path: 'create', component: CreateNewLetterComponent},

];
