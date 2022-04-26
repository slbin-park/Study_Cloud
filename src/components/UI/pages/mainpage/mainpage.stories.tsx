import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import MainPage  from './mainpage';

export default {
title: 'Pages/MainPage ',
component: MainPage ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
<>
<MainPage  {...args}  />
</>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};