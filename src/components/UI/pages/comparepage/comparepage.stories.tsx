import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import ComparePage  from './comparepage';
import StoryLayout from 'layout/story_layout';
export default {
title: 'Pages/ComparePage ',
component: ComparePage ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
<>
    <StoryLayout>
        <ComparePage  {...args}  />
    </StoryLayout>
</>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};