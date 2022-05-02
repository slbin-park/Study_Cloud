import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import TimerStyle from './timerStyle';

const TimerComponent: React.FC<any> = (props) => {
    const [seconds, setSeconds] = useState(0);
    const [ms,setms] = useState(0);
    const HOUR = 60 * 60;

    useEffect(() => {
      const interval = setInterval(() => {
          if (props.timer === false) clearInterval(interval);
          else setms(ms + 1);
      }, 1);
      return () => clearInterval(interval);
    });
    const mm = Math.floor(((ms/1000) % HOUR) / 60);
    const hh = Math.floor((ms/1000) / HOUR);
    const ss = parseInt((ms/1000) % 60);

    const formatTime = (time: number) => (time >= 10 ? time : '0'.concat(time.toString()));
    const formatms = (time: number) => (time >= 100 ? time%1000 : '0'.concat(time.toString()));


    return (
        <div>
            [&nbsp;{formatTime(hh)}:{formatTime(mm)}:{formatTime(ss)} : {formatms(ms)} &nbsp; ]
        </div>
  );
};

export default TimerComponent;