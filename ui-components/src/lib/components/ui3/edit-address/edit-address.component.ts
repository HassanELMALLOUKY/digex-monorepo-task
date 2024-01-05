import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  
} from '@angular/material/dialog';
import { ButtonComponent } from '../../ui1/button/button.component';




@Component({
  selector: 'digex-task-edit-address',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatListModule,  MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, ButtonComponent],
  templateUrl: './edit-address.component.html',
  styleUrl: './edit-address.component.css',
})
export class EditAddressComponent{
  form: FormGroup;
  @Input() cardTitel:string = " ";

  constructor(private fb: FormBuilder){
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
  


}

