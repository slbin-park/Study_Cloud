import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import Input  from './input';

export default {
title: 'Atoms/Input ',
component: Input ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
    <>
        <div style={{width:'300px'}}>
            <Input  {...args}  />
        </div>
    </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};