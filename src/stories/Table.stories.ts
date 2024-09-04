import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Table } from './Table';

const meta = {
  title: 'Example/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TableDefault: Story = {
  args: {
    data: [
      {
        id: 1,
        name: "Bappa Services",
        email: "contacto@thetaenterprises.com",
        state: "Hidalgo",
        orderNumber: "WV-70037785-01",
        status: "Pendiente"
      },
      {
        id: 2,
        name: "Epsilon Tech",
        email: "contacto@kappasolutions.com",
        state: "Yucatán",
        orderNumber: "WV-63360672-02",
        status: "Enviado"
      },
      {
        id: 3,
        name: "Aau Corp",
        email: "contacto@betacorp.com",
        state: "Campeche",
        orderNumber: "WV-69696853-03",
        status: "Cancelado"
      },
      {
        id: 4,
        name: "Xi Tech",
        email: "contacto@betacorp.com",
        state: "Chiapas",
        orderNumber: "WV-54425524-04",
        status: "Cancelado"
      },
      {
        id: 5,
        name: "Xi Tech",
        email: "contacto@betacorp.com",
        state: "Chiapas",
        orderNumber: "WV-54425524-04",
        status: "Cancelado"
      },
      {
        id: 6,
        name: "Ai Tech",
        email: "contacto@betacorp.com",
        state: "Chiapas",
        orderNumber: "WV-54425524-04",
        status: "Cancelado"
      },
      {
        id: 7,
        name: "Fi Tech",
        email: "contacto@betacorp.com",
        state: "Chiapas",
        orderNumber: "WV-54425524-04",
        status: "Cancelado"
      },
      {
        id: 8,
        name: "Vi Tech",
        email: "contacto@betacorp.com",
        state: "Chiapas",
        orderNumber: "WV-54425524-04",
        status: "Cancelado"
      },
      {
        id: 9,
        name: "Tech",
        email: "contacto@betacorp.com",
        state: "Chiapas",
        orderNumber: "WV-54425524-04",
        status: "Cancelado"
      },
      {
        id: 10,
        name: "Ci Tech",
        email: "contacto@betacorp.com",
        state: "Chiapas",
        orderNumber: "WV-54425524-04",
        status: "Cancelado"
      },
      {
        id: 11,
        name: "Tesla",
        email: "contacto@betacorp.com",
        state: "Chiapas",
        orderNumber: "WV-54425524-04",
        status: "Cancelado"
      },
      {
        id: 12,
        name: "Xi",
        email: "contacto@betacorp.com",
        state: "Chiapas",
        orderNumber: "WV-54425524-04",
        status: "Cancelado"
      },
    ]
  },
};