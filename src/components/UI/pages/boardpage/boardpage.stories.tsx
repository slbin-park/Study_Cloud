import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import moment from 'moment';
import BoardPage  from './boardpage';
import StoryLayout from 'layout/story_layout';

export default {
title: 'pages/BoardPage',
component: BoardPage ,
parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
    <>
        <StoryLayout>
            <BoardPage  {...args}  />
        </StoryLayout>
    </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
    data : [
        {
            board_num : 1,
            share_date : '2022-06-12 12:30',
            id : '송승준',
            memo : '공유 테스트입니다.',
            title : '공유 제목입니다.',
            start_time : '14:30:00',
            end_time : '16:30:00',
        },
        {
            board_num : 1,
            share_date : '2022-06-12 12:30',
            id : '송승준',
            memo : '공유 테스트입니다.',
            title : '공유 제목입니다.',
            start_time : '14:30:00',
            end_time : '16:30:00',
        },
        {
            board_num : 1,
            share_date : '2022-06-12 12:30',
            id : '송승준',
            memo : '공유 테스트입니다.',
            title : '공유 제목입니다.',
            start_time : '14:30:00',
            end_time : '16:30:00',
        }
    ]
};