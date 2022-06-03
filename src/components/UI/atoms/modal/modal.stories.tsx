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
        <Modal  {...args}   test={args.test}/>
    </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
    test : true,
    modal : {
        modal_text:'텍스트입니다.',
        modal : true,
    }
};