import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import IconText  from './icontext';

export default {
title: 'molecules/IconText ',
component: IconText ,
parameters: {},
argTypes: {
    icon: {
      control: {
        type: 'select',
        options: ['user','notice', 'community', 'study' , 'info','logout'],
      },
    },
  },
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <IconText  {...args}  />
    <IconText  {...args} icon='notice' />
    <IconText  {...args} icon='community' />
    <IconText  {...args} icon='study' />
    <IconText  {...args} icon='info' />
    <IconText  {...args} icon='logout' />

  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
    icon:'user',
};