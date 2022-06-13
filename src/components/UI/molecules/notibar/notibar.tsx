import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import { NotiLine } from '../index';
import NotiBarStyle from './notibarStyle';

const NotiBarComponent: React.FC<any> = (props) => {
  return (
    <>
      <NotiBarStyle {...props}>
        {props.data
          ? props.data.map((data) => {
              return (
                <div key={data.reply_id}>
                  <NotiLine
                    {...props}
                    data={data}
                    onClick={(e: Event) => props.Click_noti(e, data)}
                  />
                </div>
              );
            })
          : ''}
      </NotiBarStyle>
    </>
  );
};

export default NotiBarComponent;

// created_at: '2022-06-13T07:09:00.000Z';
// noti_num: 14;
// read_at: null;
// reply: 'ㅂㅈㄷ';
// reply_id: 14;
// replyid: 'smpts00';
// title: '0610 테스트';
// userid: 'smpts00';
