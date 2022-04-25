import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import BoardStyle from './boardStyle';

import { BoardType } from './boardType';


import Molecules, { LineText } from '../../molecules/index';


const BoardComponent: React.FC<any> = (props) => {
return (
    <>
        <BoardStyle {...props}>
            <div className='head'>{props.head}
            </div>
            <div className='line'></div>
            <div className='line_table'>
                {Array(6).fill(0).map((i)=>{
                    return <LineText notice='공지사항' date='2020.20.20' detail='내용입니다.' comment_num={10}/>
                })}
            
            </div>
        </BoardStyle>
    </>
);
};

export default BoardComponent;