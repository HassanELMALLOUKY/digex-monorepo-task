import { Component, Input, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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



export interface DialogData {
  cardTitel: string;
  lines: [];
}

@Component({
  selector: 'digex-task-edit-address',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatListModule,  MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, 
    MatDialogActions, MatDialogClose, MatDialogTitle, ButtonComponent, MatDialogContent, InputSingleLineComponent],
  
  templateUrl: './edit-address.component.html',
  styleUrl: './edit-address.component.css',
})
export class EditAddressComponent{
  form: FormGroup;
  @Input() cardTitel:string = " Edit receiver address";

  constructor(public dialogRef: MatDialogRef<EditAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder)
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

  
  

}

