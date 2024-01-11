import type { Meta, StoryObj } from '@storybook/angular';
import { SlideToggleComponent } from './slide-toggle.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SlideToggleComponent> = {
  component: SlideToggleComponent,
  title: 'SlideToggleComponent',
};
export default meta;
type Story = StoryObj<SlideToggleComponent>;

export const Primary: Story = {
  args: {},
};

