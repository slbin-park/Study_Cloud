import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import Calendar  from './calendar';

export default {
title: 'molecules/Calendar ',
component: Calendar ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
<>
<Calendar  {...args}  />
</>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};