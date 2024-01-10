import { Injectable } from '@angular/core';
import { LetterModel } from '../models/letter-model';

@Injectable({
  providedIn: 'root'
})
export class LetterManagementService {
  editAddressData:string[]=[];
  contactPersonInfo:any[]=[];

  constructor() { }

  public saveLetter(letterModel: LetterModel): void {
    console.log('creating new letter...');
    const maxId = this.getAllLetters().reduce((max, letter) => (letter.id > max ? letter.id : max), 0);
    letterModel.id = maxId + 1;
    localStorage.setItem(String(letterModel.id), JSON.stringify(letterModel));
  }
  public getAllLetters(): LetterModel[] {
    console.log('LetterManagementService.getAllLetters()');
    const letters: LetterModel[] = [];
    for (let i = 0; i < localStorage.length; i++) {

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      letters.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return letters;
  }


}
