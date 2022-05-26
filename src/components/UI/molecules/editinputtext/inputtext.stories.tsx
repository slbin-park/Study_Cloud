import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import InputText from './inputtext';

export default {
title: 'molecules/InputText',
component: InputText,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
<>
<InputText {...args}  />
<InputText {...args} type='시작' />
<InputText {...args} type='종료' />
<InputText {...args} type='메모' />

</>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
    type : '제목'
};