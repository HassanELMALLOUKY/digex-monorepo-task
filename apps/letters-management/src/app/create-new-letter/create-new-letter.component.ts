import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import {
  SlideToggleComponent
} from '../../../../../ui-components/src/lib/components/ui2/slide-toggle/slide-toggle.component';
import { ButtonComponent } from '../../../../../ui-components/src/lib/components/ui1/button/button.component';
import { MatInputModule } from '@angular/material/input';
import {
  InputSingleLineComponent
} from '../../../../../ui-components/src/lib/components/ui2/input-single-line/input-single-line.component';
import {
  InputTextareaDashedComponent
} from '../../../../../ui-components/src/lib/components/ui2/input-textarea-dashed/input-textarea-dashed.component';
import {
  InputTextareaComponent
} from '../../../../../ui-components/src/lib/components/ui2/input-textarea/input-textarea.component';
import { Router } from '@angular/router';
import { LetterManagementService } from '../services/letter-management.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import {
  EditAddressComponent,
  InputType
} from '../../../../../ui-components/src/lib/components/ui3/edit-address/edit-address.component';
import { mapJsonToLetterModel, mapLetterModelToJson } from '../services/mapper/letter-mapper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ArrayToStringPipe } from '../pipes/array-to-string.pipe';
import { LetterModel } from '../models/letter-model';
import { DialogComponent } from '../../../../../ui-components/src/lib/components/dialog/dialog.component';
@Component({
  selector: 'digex-task-create-new-letter',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, SlideToggleComponent, ButtonComponent,
    MatInputModule, InputSingleLineComponent, InputTextareaDashedComponent, InputTextareaComponent, FormsModule,
    EditAddressComponent, ArrayToStringPipe],
  templateUrl: './create-new-letter.component.html',
  styleUrl: './create-new-letter.component.css',
  providers:[
    // {provide: MatDialogRef, useValue: {}},
    // {provide: MAT_DIALOG_DATA, useValue: {}},
    DatePipe]
})
export class CreateNewLetterComponent implements OnInit{
  inputData: { [key: string]: any } = {};
  letterCount: number = 0;
  receiverAddress: string[]=["hello","sir","hhhhh"];
  blockA: string[]=["Block A", "Block A"];
  isOnPreview: boolean=false;
  constructor(private router: Router, protected letterManagementService: LetterManagementService,
              private fb: FormBuilder, private dialog: MatDialog,)
  {
  }


  goBackHome() {
     this.router.navigate(['/']).then(
       ()=>{
         // refresh the page
          window.location.reload();
       }
     );
  }

  ngOnInit(): void {
  
  }

  onSubmit(): void {
    this.letterCount = this.letterManagementService.getAllLetters().reduce((max, letter) => (letter.id > max ? letter.id : max), 0);
    let letter = mapJsonToLetterModel(this.inputData);
    letter.id = this.letterCount + 1;
    this.letterManagementService.saveLetter(letter);
    console.log("Letter saved!");
  }

  openReceiveAddressDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '600px',
      data: { dialogTitle: "Edit receiver address", inputType: InputType.SIMPLE }
    });
}
  openContactPerson() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '600px',
      data: { dialogTitle: "Edit contact person", inputType: InputType.DATE }
    });
  }
// handle the output from the input component
  handleDataChange(key:string,data: any) {
    this.inputData[key] = data;
    console.log("received data form InputData",this.inputData);
  }
  onPreview():void{
    this.inputData["receiverAddress"]=this.letterManagementService.editAddressData;
    console.log("receiverAddress on Preview mode: ",this.inputData["receiverAddress"]);
    this.inputData["blockA"]=this.letterManagementService.contactPersonInfo;
    this.isOnPreview=!this.isOnPreview;
  }


}
