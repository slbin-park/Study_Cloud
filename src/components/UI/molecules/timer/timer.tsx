import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import useStore from 'zus/timer/timer';
import TimerStyle from './timerStyle';

const TimerComponent: React.FC<any> = (props) => {
    const timer = useStore();
    const HOUR = 60 * 60;

    useEffect(() => {
      const interval = setInterval(() => {
          if (props.timer === false) clearInterval(interval);
          else timer.increase_timer();
      }, 1000);
      return () => clearInterval(interval);
    });
    
    const mm = Math.floor(((timer.ms/1000) % HOUR) / 60);
    const hh = Math.floor((timer.ms/1000) / HOUR);
    const ss = Math.floor((timer.ms/1000) % 60);

    const formatTime = (time: number) => (time >= 10 ? time : '0'.concat(time.toString()));
    const formatms = (time: number) => (time >= 100 ? time%1000 : '0'.concat(time.toString()));


    return (
        <TimerStyle {...props}>
            {formatTime(hh)}:{formatTime(mm)}:{formatTime(ss)}
        </TimerStyle>
  );
};

export default TimerComponent;