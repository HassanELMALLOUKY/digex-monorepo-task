import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

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
@Component({
  selector: 'digex-task-create-new-letter',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, SlideToggleComponent, ButtonComponent,
            MatInputModule, InputSingleLineComponent, InputTextareaDashedComponent, InputTextareaComponent, FormsModule,
            EditAddressComponent],
  templateUrl: './create-new-letter.component.html',
  styleUrl: './create-new-letter.component.css',
  providers:[DatePipe]
})
export class CreateNewLetterComponent implements OnInit{
  inputData: { [key: string]: any } = {};
  letterCount: number = 0;
  receiverAddress: string[]=["hello","sir","hhhhh"];
  blockA: string[]=["Block A", "Block A"];
  myButtonText: string="Save";
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
    this.letterCount = this.letterManagementService.getAllLetters().reduce((max, letter) => (letter.id > max ? letter.id : max), 0);
    this.letterManagementService.saveLetter({
      id: 1,
      senderAddress: "Company GmbH, Musterstraße 10, 12345 Musterstadt",
      receiverAddress: ["Test GmbH","Wallstraße 8, Frankfurt","GERMANY"],
      blockA: ["Date: 01.01.2023","Contact person: Max Mustermann"],
      subject: "This is an example subject line",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
      footnote: ""
    });
  }

  onSubmit(): void {
    this.letterManagementService.saveLetter(mapJsonToLetterModel(this.inputData));
    console.log("Letter saved!");
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(EditAddressComponent, {
      width: '600px',
      data: {
        cardTitel: "Edit receiver address",
        content:this.letterManagementService.mapToString(this.letterManagementService.editAddressData),
        inputType: InputType.SIMPLE
      }
    });
}
  openContactPerson() {
    const dialogRef = this.dialog.open(EditAddressComponent, {
      width: '600px',
      data: { cardTitel: "Edit contact person", content:this.letterManagementService.mapToString(this.letterManagementService.editAddressData),
        inputType: InputType.DATE
      }
    });
  }
// handle the output from the input component
  handleDataChange(key:string,data: any) {
    this.inputData[key] = data;
    console.log("received data form Dialog",this.letterManagementService.editAddressData);
  }
  onPreview():void{
    this.inputData=mapLetterModelToJson(this.letterManagementService.getLetter("1"));
    this.isOnPreview=!this.isOnPreview;
  }


}
