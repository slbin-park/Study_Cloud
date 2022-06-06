import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import EditPage  from './editpage';
import StoryLayout from 'layout/story_layout';
export default {
title: 'Pages/EditPage ',
component: EditPage ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
    <>
        <StoryLayout>
            <EditPage  {...args}  />
        </StoryLayout>
    </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};