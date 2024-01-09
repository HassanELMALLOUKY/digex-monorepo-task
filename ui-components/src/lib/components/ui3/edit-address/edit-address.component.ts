  import { Component, Input, Inject, OnInit } from '@angular/core';
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
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  LetterManagementService
} from '../../../../../../apps/letters-management/src/app/services/letter-management.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ArrayToStringPipe } from '../../../../../../apps/letters-management/src/app/pipes/array-to-string.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



export interface DialogData {
  cardTitel: string;
  content: Array<string>;
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
    MatNativeDateModule ],

  templateUrl: './edit-address.component.html',
  styleUrl: './edit-address.component.css',
  providers:[
    {provide: MatDialogRef , useValue:{} },

    { provide: MAT_DIALOG_DATA, useValue: {} },
    MatDatepickerModule
  ]
})

export class EditAddressComponent implements OnInit{
  protected readonly InputType = InputType;
  form: FormGroup;
  @Input() cardTitel:string = " Edit receiver address";
  @Input() content: Array<string>=['dd','ff','vv'];
  constructor(public dialogRef: MatDialogRef<EditAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder,
              private letterService: LetterManagementService
              )
    {
      this.form = this.fb.group({
        items: this.fb.array([]),
      });
      if(this.content.length != 0){
        this.cardTitel = this.data.cardTitel;
        this.content = this.data.content;

      }
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
  onApplyClick(){
    console.log(this.items.controls)
  }


  displayInConsole() {
    console.log(this.items.controls.values())


    if(this.data.inputType === InputType.DATE){
      this.letterService.contactPersonInfo=[];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const originalDate = new Date((this.items.value as Array<any>)[0].line);
      const formatedDate=originalDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).replace(/\//g, '.')
      this.letterService.contactPersonInfo.push({"line":"Date: "+formatedDate});
      (this.items.value as Array<string>).slice(1,this.items.value.length).forEach((item) => {
        this.letterService.contactPersonInfo.push(item);
      });
      console.log("contact info ",this.letterService.contactPersonInfo);
    }
    else {
      this.letterService.editAddressData= this.items.value as Array<string>;
      console.log("get items: ",this.letterService.editAddressData, "from array "  , this.items.value as Array<string>);

      console.log("data if check", this.data.content )

    }
    this.dialogRef.close();

  }



  ngOnInit(): void {
    console.log(this.items.controls)
    console.log(this.data.content)



    if (this.data.content.length !== 0 ) {
      this.data.content.forEach((item) => {
        this.items.controls.push(this.fb.control({
          line: item
        })); // Add each item as a FormControl to the FormArray
      });

      console.log("content of items in the value: ",this.items.value);
      console.log("content of items in the controls: ",this.items.controls);

    }


    console.log("content after: ",this.data.content);


    // this.items.controls=this.data.content as Array<string>;
  }
}
