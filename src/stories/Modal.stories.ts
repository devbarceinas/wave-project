import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Modal } from './Modal';

const meta = {
  title: 'Example/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { 
    onClose: fn(),
    onAction: fn()
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalDefault: Story = {
  args: {
    title: 'Detalles de la orden',
    isOpen: false,
    cliente: 'Innovatech Solutions',
    correo: 'info@innovatechsolutions.com',
    noDeOrden: 'WV-003669344-24',
    enviadoEl: '23/01/2024 a las 14:02 hrs',
  },
};