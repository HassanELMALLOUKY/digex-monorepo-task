import { Injectable } from '@angular/core';
import { LetterModel } from '../models/letter-model';

@Injectable({
  providedIn: 'root'
})
export class LetterManagementService {

  constructor() { }

  public saveLetter(letterModel: LetterModel): void {
    console.log('LetterManagementService.createLetter()');
    localStorage.setItem(String(letterModel.id), JSON.stringify(letterModel));
  }
  public getLetter(letterName:string): LetterModel {
    console.log('LetterManagementService.getLetter()');
    // @ts-ignore
    return JSON.parse(localStorage.getItem(letterName));
  }
}
