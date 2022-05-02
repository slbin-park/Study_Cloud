import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import Timer  from './timer';

export default {
title: 'molecules/Timer ',
component: Timer ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
<>
<Timer  {...args}  />
</>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};