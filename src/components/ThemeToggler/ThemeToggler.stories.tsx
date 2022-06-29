import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThemeToggler from './ThemeToggler';

export default {
  title: 'Header/Theme Toggler',
  component: ThemeToggler,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeToggler>;

const Template: ComponentStory<typeof ThemeToggler> = () => (
  <div className="dark:bg-dark-primary inline-flex p-5 rounded-full">
    <ThemeToggler />
  </div>
);

export const Primary = Template.bind({});
