import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'digex-task-edit-address',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './edit-address.component.html',
  styleUrl: './edit-address.component.css',
})
export class EditAddressComponent implements OnInit {
  addressForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      lines: this.formBuilder.array([
        this.formBuilder.control('') 
      ])
    });
  }

  addLine() {
    const lines = this.addressForm.get('lines') as FormArray;
    lines.push(this.formBuilder.control(''));
  }

  removeLine(index: number) {
    const lines = this.addressForm.get('lines') as FormArray;
    lines.removeAt(index);
  }
}