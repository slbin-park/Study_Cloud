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
    },
    board : {
        board_num : 1,
        share_date : '2022-06-12 12:30',
        id : '박슬빈',
        memo : '공유 테스트입니다.',
        title : '공유 제목입니다.',
        start_time : '14:30:00',
        end_time : '16:30:00',
    },
    reply_data : [{
        name : '송승준',
        reply_date : '2022-06-12 12:30',
        reply : 'ㅋ 별거없네'
    },{
        name : '조재현',
        reply_date : '2022-06-12 12:30',
        reply : '미친인싸비틱홍어련'
    }]
};