import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import NotiBar from './notibar';

export default {
  title: 'molecules/NotiBar ',
  component: NotiBar,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <NotiBar {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  appear: true,
  data: [
    {
      reply_id: 1,
      userid: 'smpts00',
      replyid: 'smpts00',
      created_at: '2022-06-12T15:12:00.000Z',
      read_at: null,
      reply: 'asdf',
      noti_num: 14,
      title: '0610 테스트',
    },
  ],
};
