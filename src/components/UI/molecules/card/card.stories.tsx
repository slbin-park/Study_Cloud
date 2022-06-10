import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import Card from './card';
import StoryLaout from 'layout/story_layout';

export default {
  title: 'molecules/Card ',
  component: Card,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoryLaout>
      <Card {...args} />
    </StoryLaout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  board: false,
};
