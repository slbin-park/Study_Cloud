import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import LineText  from './linetext';

export default {
title: 'molecules/LineText ',
component: LineText ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
<>
<LineText  {...args} notice = {args.notice} />
</>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
    date : '2022.04.25',
    notice : '공지사항',
    detail : '강선우가 진짜 못생겼습니다. 그렇죠??..',
    comment_num : 10,
};