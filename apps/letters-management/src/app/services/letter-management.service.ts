import { Injectable } from '@angular/core';
import { LetterModel } from '../models/letter-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LetterManagementService {
  private dataSubject = new BehaviorSubject<any>(this.getAllLetters());
  data$ = this.dataSubject.asObservable();
  constructor() { }

  public saveLetter(letterModel: LetterModel): void {
    console.log('creating new letter...');
    const maxId = this.getAllLetters().reduce((max, letter) => (letter.id > max ? letter.id : max), 0);
    letterModel.id = maxId + 1;
    localStorage.setItem(String(letterModel.id), JSON.stringify(letterModel));
  }
  public getLetter(letterName:string): LetterModel {
    console.log('LetterManagementService.getLetter()');
    // @ts-ignore
    return JSON.parse(localStorage.getItem(letterName));
  }
  public getAllLetters(): LetterModel[] {
    console.log('LetterManagementService.getAllLetters()');
    let letters: LetterModel[] = [];
    for (let i = 0; i < localStorage.length; i++) {

      // @ts-ignore
      letters.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return letters;
  }
}
