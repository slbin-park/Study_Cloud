import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import NavBar from './navbar';

export default {
  title: 'molecules/NavBar ',
  component: NavBar,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <NavBar {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  hamburger: true,
};
