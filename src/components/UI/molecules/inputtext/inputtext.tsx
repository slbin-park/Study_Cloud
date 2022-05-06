import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import moment from 'moment';
import InputTextStyle from './inputtextStyle';
import Atoms , {Select} from '../../atoms';
import {time,minute} from'./timeParm';
const InputTextComponent: React.FC<any> = (props) => {
    const [getMoment, setMoment] = useState(moment());
return (
    <>
        <InputTextStyle>
        {props.type == '제목'? <>
        <div className='text'>제목</div>
        
         <input type='text'/></>:''}

        {props.type == '시작'? 
        <>
        <div className='text'>시작</div>
         {getMoment.format('YYYY.MM.DD')}
        오전
        <div className='select'>
        <Select placeholder='0' item={time}></Select>
        </div>
        <div className='select'>
        <Select placeholder='0' item={minute}></Select>
        </div>
        </>:''}

        {props.type == '종료'? 
        <>
                <div className='text'>종료</div>
 {getMoment.format('YYYY.MM.DD')}
        오전
        <div className='select'>
        <Select placeholder='0' item={time}></Select>
        </div>
        <div className='select'>
        <Select placeholder='0' item={minute}></Select>
        </div>
        </>:''}

        {props.type == '메모'? 
        <>
        메모 
        <input type='text'/>
        </>:''}
        </InputTextStyle>
    </>
);
};

export default InputTextComponent;