import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { Badge } from './Badge';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success: Story = {
  args: {
    variant: 'Enviado',
    text: 'Enviado',
  },
};

export const Warning: Story = {
  args: {
    variant: 'Pendiente',
    text: 'Pendiente',
  },
};

export const Danger: Story = {
  args: {
    variant: 'Cancelado',
    text: 'Cancelado',
  },
};
