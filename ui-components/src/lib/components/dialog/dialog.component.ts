import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { ButtonComponent } from '../ui1/button/button.component';
import { InputSingleLineComponent } from '../ui2/input-single-line/input-single-line.component';
import { LetterManagementService } from 'apps/letters-management/src/app/services/letter-management.service';
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
    MatDialogActions, MatDialogClose, MatDialogTitle, ButtonComponent, MatDialogContent, InputSingleLineComponent,],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent implements OnInit {
  constructor(private fb:FormBuilder,private letterService:LetterManagementService,public dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit(): void {
    if(this.letterService.editAddressData.length>0){
      this.letterService.editAddressData.forEach((item)=>{
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
    this.letterService.editAddressData=[];
    //console.log("mapping from value",this.form.value.lines?.map((item: any) => item.line));
    const arrayResult=this.form.value.lines?.map((item: any) => 
    this.letterService.editAddressData.push(item.line));
    console.log("editAddressData",this.letterService.editAddressData);
    this.dialogRef.close();
  }

}
