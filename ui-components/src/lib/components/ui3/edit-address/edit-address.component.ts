import { Component, Input, Inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormArray, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { ButtonComponent } from '../../ui1/button/button.component';
import {InputSingleLineComponent} from '../../ui2/input-single-line/input-single-line.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogRef,
  MatDialogContent
  } from '@angular/material/dialog';
import {
  LetterManagementService
} from '../../../../../../apps/letters-management/src/app/services/letter-management.service';
import { ArrayToStringPipe } from '../../../../../../apps/letters-management/src/app/pipes/array-to-string.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



export interface DialogData {
  cardTitel: string;
  content: [];
  inputType: InputType;
}
export enum InputType {
  SIMPLE = 'SIMPLE', DATE = 'DATE'
}
@Component({
  selector: 'digex-task-edit-address',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatListModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule,
    MatDialogActions, MatDialogClose, MatDialogTitle, ButtonComponent, MatDialogContent, InputSingleLineComponent, ArrayToStringPipe, MatDatepickerModule,
    MatNativeDateModule
  ],

  templateUrl: './edit-address.component.html',
  styleUrl: './edit-address.component.css',
  providers:[
    MatDatepickerModule
  ]
})

export class EditAddressComponent implements OnInit{
  protected readonly InputType = InputType;
  form: FormGroup;
  @Input() cardTitel:string = " Edit receiver address";
  constructor(public dialogRef: MatDialogRef<EditAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder,
              private letterService: LetterManagementService
              )
    {
      this.form = this.fb.group({
        items: this.fb.array([]),
      });
    }


  get items(){
    return this.form.get('items') as FormArray
  }

  removeLine(index: number) {
      this.items.removeAt(index);
  }

  addLine() {
    this.items.push(
      this.fb.group({
        line: ['']
      })
    );
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }


  displayInConsole() {
   // console.log("get items: ",this.items.value as Array<string>)
    if(this.data.inputType === InputType.DATE){
      let originalDate = new Date((this.items.value as Array<any>)[0].line);
      let formatedDate=originalDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).replace(/\//g, '.')
      this.letterService.contactPersonInfo.push("Date: "+formatedDate);
      (this.items.value as Array<string>).slice(1,this.items.value.length).forEach((item) => {
        this.letterService.contactPersonInfo.push(item);
      });
      console.log("contact info ",this.letterService.contactPersonInfo);
    }
    else {
      this.letterService.editAddressData= this.items.value as Array<string>;
      console.log("get items: ",this.letterService.editAddressData);
    }
    this.dialogRef.close();
  }



  ngOnInit(): void {
    console.log("inputType: ",this.data.inputType);
  }
}

