import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
// import StoriesLayout from "StoriesLayout";
import {HeaderType} from './headerType';
import HeaderComponent from './header';

export default {
  title: 'Molecules/Header',
  component: HeaderComponent,
  parameters: {},
} as Meta;

const Template: Story<HeaderType> = (args) => (
  <>
    <span className={'info'}>Primary</span>
    <HeaderComponent
    />

  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {

};
