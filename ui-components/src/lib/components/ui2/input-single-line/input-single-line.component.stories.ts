import type { Meta, StoryObj } from '@storybook/angular';
import { InputSingleLineComponent } from './input-single-line.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputSingleLineComponent> = {
  component: InputSingleLineComponent,
  title: 'InputSingleLineComponent',
};
export default meta;
type Story = StoryObj<InputSingleLineComponent>;

export const Primary: Story = {
  args: {
    label: 'Label',
  },
};

