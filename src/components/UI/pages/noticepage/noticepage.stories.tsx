import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import NoticePage from './noticepage';
import StoryLayout from 'layout/story_layout';

export default {
  title: 'pages/NoticePage ',
  component: NoticePage,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoryLayout>
      <NoticePage {...args} />
    </StoryLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
