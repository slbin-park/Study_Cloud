import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import EditPage  from './editpage';

export default {
title: 'Atoms/EditPage ',
component: EditPage ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
<>
<EditPage  {...args}  />
</>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};