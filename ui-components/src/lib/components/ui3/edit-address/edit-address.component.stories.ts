import type { Meta, StoryObj } from '@storybook/angular';
import { EditAddressComponent } from './edit-address.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<EditAddressComponent> = {
  component: EditAddressComponent,
  title: 'EditAddressComponent',
};
export default meta;
type Story = StoryObj<EditAddressComponent>;

export const Primary: Story = {
  args: {
    
  },
};


export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/edit-address works!/gi)).toBeTruthy();
  },
};
