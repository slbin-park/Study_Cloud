import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import LineTextStyle from './linetextStyle';

const LineTextComponent: React.FC<any> = (props) => {
return (
    <>
    <LineTextStyle {...props}>
        <div className='date'>
            {props.date} 
        </div>
        <div className='notice'>
            [ {props.notice} ]
        </div>
        <div className='detail'>
            {props.detail}
        </div>
        <div className='comment'>
            [{props.comment_num}]
        </div>
    </LineTextStyle>
    </>
);
};

export default LineTextComponent;