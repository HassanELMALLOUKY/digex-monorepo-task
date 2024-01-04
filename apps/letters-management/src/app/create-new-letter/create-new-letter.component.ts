import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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

@Component({
  selector: 'digex-task-create-new-letter',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, SlideToggleComponent, ButtonComponent, MatInputModule, InputSingleLineComponent, InputTextareaDashedComponent, InputTextareaComponent, FormsModule],
  templateUrl: './create-new-letter.component.html',
  styleUrl: './create-new-letter.component.css',
})
export class CreateNewLetterComponent implements OnInit{
  formData = {
    senderAddress: '',
    subject: '',
  };
  firstInput: string="Sender Address";
  secondInput: string="Subject (optional)";
  thirdInput: string="Footnote (optional)";
  firstDashedInput: string="Receiver Address";
  secondDashedInput: string="Block A";
  myButtonText: string="Save";

  dashedAreaContent: string[]=["Sender Name", "Sender Address"];
  constructor(private router: Router,private letterManagementService: LetterManagementService,private fb: FormBuilder) {
  }


  goBackHome() {
     this.router.navigate(['/']);
  }

  ngOnInit(): void {

    this.letterManagementService.saveLetter({
      id: 1,
      senderAddress: "Sender Address",
      receiverAddress: ["Receiver Address","Receiver Address"],
      blockA: ["Block A", "Block A"],
      subject: "Subject (optional)",
      body: "Body",
      footnote: "Footnote (optional)"
    });
    console.log("Letter saved!", this.letterManagementService.getLetter("1"));
  }

  onSubmit(): void {
    // @ts-ignore
    console.log('Form submitted:', this.formData);
    // Add your form submission logic here
  }
}