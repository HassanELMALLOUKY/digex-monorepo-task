import type { Meta, StoryObj } from '@storybook/angular';
import { EditAddressComponent } from './edit-address.component';


const meta: Meta<EditAddressComponent> = {
  component: EditAddressComponent,
  title: 'EditAddressComponent',


};
export default meta;
type Story = StoryObj<EditAddressComponent>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Primary: Story = {
  args: {
    cardTitel: 'Edit receiver address',
    content: ['vv','nn','bb']
  },
};

