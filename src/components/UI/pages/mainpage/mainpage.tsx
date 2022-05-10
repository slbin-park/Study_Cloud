import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import moment from 'moment';

import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {faUserCircle } from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import {Button} from '../../atoms/index';
import MainPageStyle from './mainpageStyle';
import {Card,Timer} from '../../molecules/index';
import  useStore from 'zus/time/time';

const MainPageComponent: React.FC<any> = (props) => {
    const time = useStore();
    const [timer,set_timer] = useState(false)
    return (
        <>
        <MainPageStyle>
            <div className = 'head_box'>
                <FontAwesomeIcon icon={faUserCircle}  style={{height:'70px',color:'#ffad85'}}/>
            <div className = 'date' >
            
            <FontAwesomeIcon icon={faArrowLeft} style={{height:'25px'}} onClick={time.decrease_day}/>
            
            {time.time.format('YYYY 년 MM 월 DD 일')}
            
            <FontAwesomeIcon icon={faArrowRight} style={{height:'25px'}} onClick={time.increase_day}/>
            
            </div>
            <div className = 'time'>
                <Timer timer = {timer}/>
            </div>
            <div className = 'start' onClick={()=>set_timer(!timer)}>
                <Button >
                    {timer ? '종료' : '시작'}
                </Button>
            </div>
            </div>

            <div className = 'til'>
                <div className = 'til_head'>
                    오늘 한 일
                </div>
                <div className='til_card'>
                <Card/>
                <Card/>
                </div>
            </div>
        </MainPageStyle>
    </>
);
};

export default MainPageComponent;