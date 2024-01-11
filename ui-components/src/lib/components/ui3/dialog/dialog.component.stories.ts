import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DialogComponent, InputType } from './dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const meta: Meta<DialogComponent> = {
  component: DialogComponent,
  title: 'DialogComponent',
  decorators:[
    moduleMetadata({
      imports:[MatNativeDateModule,BrowserAnimationsModule],
      providers:[
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        
      ]
    }),
  ]
};
export default meta;
type Story = StoryObj<DialogComponent>;

export const Primary: Story = {
  args: {
    data:{
      dialogTitle:"Dialog Title",
      inputType: InputType.DATE
    }
  },
  }

// function provideAnimations(): import("@angular/core").Provider {
//   throw new Error('Function not implemented.');
// }

