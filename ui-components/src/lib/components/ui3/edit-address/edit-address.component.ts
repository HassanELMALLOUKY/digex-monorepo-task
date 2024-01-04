import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';



@Component({
  selector: 'digex-task-edit-address',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './edit-address.component.html',
  styleUrl: './edit-address.component.css',
})
export class EditAddressComponent{

  constructor(private fb: FormBuilder){}


  form = this.fb.group({
    items: this.fb.array([]),
  });

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


}

