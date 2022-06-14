import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import StudyPage from './studypage';
import StoryLayout from 'layout/story_layout';
export default {
  title: 'pages/StudyPage ',
  component: StudyPage,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoryLayout>
      <StudyPage {...args} />
    </StoryLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
