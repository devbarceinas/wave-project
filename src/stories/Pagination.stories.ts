import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Pagination } from './Pagination';

const meta = {
  title: 'Example/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onPageChange: fn() },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaginationDefault: Story = {
  args: {
    totalPage: 2,
    currentPage: 1,
  },
};
