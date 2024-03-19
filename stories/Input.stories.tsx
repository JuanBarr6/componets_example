// src/atoms/Input/Input.stories.js
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from '../atoms/input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
};

export default meta;

export const Text: StoryObj<typeof Input> = {
  name: 'Text',
  render: () => <Input placeholder="Text Input" />,
};

export const Email: StoryObj<typeof Input> = {
  name: 'Email',
  render: () => <Input type="email" placeholder="Email Input" />,
};

export const Password: StoryObj<typeof Input> = {
  name: 'Password',
  render: () => <Input type="password" placeholder="Password" />,
};

export const Error: StoryObj<typeof Input> = {
  name: 'Error',
  render: () => <Input isError placeholder="Error State" />,
};

export const Block: StoryObj<typeof Input> = {
  name: 'Block',
  render: () => <Input isBlock placeholder="Block Width" />,
};
