import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import RecordPage  from './recordpage';

export default {
title: 'pages/RecordPage ',
component: RecordPage ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
<>
<RecordPage  {...args}  />
</>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};