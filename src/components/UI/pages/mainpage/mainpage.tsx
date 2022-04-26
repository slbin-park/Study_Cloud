import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {faUserCircle } from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import {Button} from '../../atoms/index';
import MainPageStyle from './mainpageStyle';

const MainPageComponent: React.FC<any> = (props) => {
return (
    <>
        <MainPageStyle>
            <div className = 'head_box'>
                <FontAwesomeIcon icon={faUserCircle} style={{height:'70px',color:'#ffad85'}}/>
            <div className = 'date' >
            <FontAwesomeIcon icon={faArrowLeft} style={{height:'25px'}}/>
            2022년 02월 22일
            <FontAwesomeIcon icon={faArrowRight} style={{height:'25px'}}/>
            </div>
            <div className = 'time'>
                00 : 00 : 00
            </div>
            <div className = 'start'>
                <Button>
                    시작
                </Button>
            </div>
            </div>

            <div className = 'til'>
                <div className = 'til_head'>
                    오늘 한 일
                </div>
                <div>
                    1번
                </div>
                <div>
                    1번
                </div>
                <div>
                    1번
                </div>
                <div>
                    1번
                </div>
            </div>
        </MainPageStyle>
    </>
);
};

export default MainPageComponent;