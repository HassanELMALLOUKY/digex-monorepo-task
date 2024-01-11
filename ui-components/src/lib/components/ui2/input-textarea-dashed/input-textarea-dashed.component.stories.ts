import type { Meta, StoryObj } from '@storybook/angular';
import { InputTextareaDashedComponent } from './input-textarea-dashed.component';

const meta: Meta<InputTextareaDashedComponent> = {
  component: InputTextareaDashedComponent,
  title: 'InputTextareaDashedComponent',
};
export default meta;
type Story = StoryObj<InputTextareaDashedComponent>;

export const Primary: Story = {
  args: {
    label:"Label",
    inputValue: [],
  },
};
