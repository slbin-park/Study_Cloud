import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import StudyPage  from './studypage';

export default {
title: 'pages/StudyPage ',
component: StudyPage ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
<>
<StudyPage  {...args}  />
</>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};