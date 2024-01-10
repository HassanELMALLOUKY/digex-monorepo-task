import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { ButtonComponent } from '../../ui1/button/button.component';
import { InputSingleLineComponent } from '../../ui2/input-single-line/input-single-line.component';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { LetterManagementService } from '../../../../../../apps/letters-management/src/app/services/letter-management.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LineToString, RemoveDatePrefixPipe } from 'apps/letters-management/src/app/pipes/array-to-string.pipe';
export interface DialogData {
  dialogTitle: string;
  inputType: InputType;
}
export enum InputType {
  SIMPLE = 'SIMPLE', DATE = 'DATE'
}
@Component({
  selector: 'digex-task-dialog',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatListModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule,
    MatDialogActions, MatDialogClose, MatDialogTitle, ButtonComponent, MatDialogContent, InputSingleLineComponent,MatDatepickerModule,
    MatNativeDateModule, RemoveDatePrefixPipe,LineToString],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent implements OnInit {
  protected readonly InputType = InputType;
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private letterService:LetterManagementService,
              public dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit(): void {
    if(this.data.inputType==InputType.SIMPLE && this.letterService.editAddressData.length>0){
      this.letterService.editAddressData.forEach((item)=>{
        this.lines.push(this.fb.group({
          line:[item],
          }));
      });
    } else{
      this.letterService.contactPersonInfo.slice(1);
      this.letterService.contactPersonInfo.forEach((item)=>{
        this.lines.push(this.fb.group({
          line:[item],
          }));
      });
    }
  }
  form=this.fb.group({
    lines:this.fb.array([]),
  })
  get lines(){
    return this.form.get('lines') as FormArray;
  }
  addLine(){
    this.lines.push(this.fb.group({
      line:[''],
      }));
  }
  removeLine(i:number){
    this.lines.removeAt(i);
  }
  cancel(){
    this.dialogRef.close();
  }
  save(){
    if(this.data.inputType==InputType.SIMPLE){
      this.letterService.editAddressData=[];
      this.form.value.lines?.map((item: any) =>
      this.letterService.editAddressData.push(item.line));
      console.log("editAddressData",this.letterService.editAddressData);
    }else {
      this.letterService.contactPersonInfo=[];
      this.form.value.lines?.map((item: any) =>
      this.letterService.contactPersonInfo.push(item.line));
      const date = new Date(this.letterService.contactPersonInfo[0]);

      // Get the formatted date string (MM.dd.YYYY)
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      this.letterService.contactPersonInfo[0]="Date: "+formattedDate;
    }

    this.dialogRef.close();
  }

}
