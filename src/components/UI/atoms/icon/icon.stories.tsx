import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import Icon  from './icon';

export default {
title: 'Atoms/Icon ',
component: Icon ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
<>
<Icon  {...args}  />
</>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};