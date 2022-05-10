import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import Card  from './card';

export default {
title: 'molecules/Card ',
component: Card ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
<>
<Card  {...args}  />
</>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};