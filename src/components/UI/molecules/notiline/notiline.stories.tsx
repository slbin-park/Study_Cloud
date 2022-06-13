import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import NotiLine from './notiline';
import StoryLayout from 'layout/story_layout';

export default {
  title: 'molecules/NotiLine ',
  component: NotiLine,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoryLayout>
      <NotiLine {...args} />
    </StoryLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  data: {
    reply_id: 1,
    userid: 'smpts00',
    replyid: 'smpts00',
    created_at: '2022-06-12T15:12:00.000Z',
    read_at: null,
    reply: 'asdf',
    noti_num: 14,
    title: '0610 테스트',
  },
};
