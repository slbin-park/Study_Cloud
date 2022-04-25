import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import Board  from './board';

export default {
title: 'molecules/Board ',
component: Board ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
<>
<Board  {...args}  />
</>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
    head : '공지사항',

};