import type { Meta, StoryObj } from '@storybook/angular';
import { DialogComponent } from './dialog.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DialogComponent> = {
  component: DialogComponent,
  title: 'DialogComponent',
};
export default meta;
type Story = StoryObj<DialogComponent>;

export const Primary: Story = {
  args: {
  },
  }

