import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import RegisterPage  from './registerpage';
import StoryLayout from 'layout/story_layout';

export default {
title: 'pages/RegisterPage ',
component: RegisterPage ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
    <>
        <StoryLayout>
            <RegisterPage  {...args}  />
        </StoryLayout>
    </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};