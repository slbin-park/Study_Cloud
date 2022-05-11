import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import Modal  from './modal';

export default {
title: 'Atoms/Modal ',
component: Modal ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
<>
<Modal  {...args}  />
</>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};