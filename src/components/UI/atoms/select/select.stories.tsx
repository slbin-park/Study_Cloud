import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import Select from './select_component';

export default {
  title: 'Atoms/Select',
  component: Select,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
      <div
        style={{
          width: args.width,
        }}
      >
        <span className="info">Default</span>
        <Select {...args} isFail={args.isFail} />


      </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  item: ['남자', '여자'],
  placeholder: 'default',
  width: '300px',
  isFail: false,
  disabled: false,
};
