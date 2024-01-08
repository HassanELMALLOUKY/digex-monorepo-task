import type { Meta, StoryObj } from '@storybook/angular';
import { EditAddressComponent, InputType } from './edit-address.component';


const meta: Meta<EditAddressComponent> = {
  component: EditAddressComponent,
  title: 'EditAddressComponent',


};
export default meta;
type Story = StoryObj<EditAddressComponent>;

// @ts-ignore
export const Primary: Story = {
  args: {
    cardTitel: 'Edit receiver address',
  },
};

