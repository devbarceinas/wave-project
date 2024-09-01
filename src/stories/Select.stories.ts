import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Select } from './Select';

const meta = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectDefault: Story = {
  args: {
    options: [
      { value: 'value 1', label: 'Value 1' },
      { value: 'value 2', label: 'Value 2' },
      { value: 'value 3', label: 'Value 3' },
    ],
    defaultValue: 'value 3'
  },
};

