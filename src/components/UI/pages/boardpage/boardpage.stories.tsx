import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import BoardPage  from './boardpage';
import StoryLayout from 'layout/story_layout';

export default {
title: 'pages/BoardPage',
component: BoardPage ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
    <>
        <StoryLayout>
            <BoardPage  {...args}  />
        </StoryLayout>
    </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};