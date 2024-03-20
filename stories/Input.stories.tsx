// Input.stories.js
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from '../atoms/atoms/Input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    name: 'Primary',
  render: () => <Input label='' type='primary' />,
  };