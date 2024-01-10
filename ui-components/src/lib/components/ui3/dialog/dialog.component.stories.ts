import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DialogComponent, InputType } from './dialog.component';
import { MatNativeDateModule } from '@angular/material/core';


const meta: Meta<DialogComponent> = {
  component: DialogComponent,
  title: 'DialogComponent',
  decorators: [
    moduleMetadata({
      imports: [MatNativeDateModule /* Add other necessary Angular Material modules here */],
      // Add providers if required
    }),
  ],
};
export default meta;
type Story = StoryObj<DialogComponent>;

export const Primary: Story = {
  args: {
      data: { dialogTitle: "Edit receiver address", inputType: InputType.SIMPLE }
  },
  }

