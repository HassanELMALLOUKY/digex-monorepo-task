import type { Meta, StoryObj } from '@storybook/angular';
import { InputTextareaDashedComponent } from './input-textarea-dashed.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputTextareaDashedComponent> = {
  component: InputTextareaDashedComponent,
  title: 'InputTextareaDashedComponent',
};
export default meta;
type Story = StoryObj<InputTextareaDashedComponent>;

export const Primary: Story = {
  args: {
    label:"Label",
    content:["item1","item2","item3"]
  },
};
