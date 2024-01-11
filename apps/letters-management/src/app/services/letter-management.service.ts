import { Injectable } from '@angular/core';
import { LetterModel } from '../models/letter-model';

@Injectable({
  providedIn: 'root'
})
export class LetterManagementService {
  editAddressData:string[]=[];
  contactPersonInfo:string[]=[];
  
  constructor() { }

  public saveLetter(letterModel: LetterModel): void {
    const maxId = this.getAllLetters().reduce((max, letter) => (letter.id > max ? letter.id : max), 0);
    letterModel.id = maxId + 1;
    localStorage.setItem(String(letterModel.id), JSON.stringify(letterModel));
  }
  
  public getAllLetters(): LetterModel[] {
    let letters: LetterModel[] = [];
    for (let i = 0; i < localStorage.length; i++) {

      // @ts-ignore
      letters.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return letters;
  }
  
}
