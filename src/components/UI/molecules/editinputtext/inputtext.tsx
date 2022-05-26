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
import useStore from 'zus/record/edit';

const InputTextComponent: React.FC<any> = (props) => {
    const edit = useStore();
    return (
    <>
        <InputTextStyle {...props}>
        {props.type == '제목'? <>
        <div className='text'>제목</div>
        
         <input name='title' type='text' value = {edit.title} onChange={(e)=>edit.edit_title(e.target.value)}/></>:''}
    
        {props.type == '시작'? 
        <>
        <div className='text'>시작</div>
        <div>{props.time.time.format('YYYY.MM.DD')}</div>
        
        <div className='select'>
        <Select dvalue={edit.start_d} name='start' placeholder='없음' item={['오전','오후']}></Select>
        </div>

        <div className='select'>
        <Select dvalue={edit.start_t} name='start_t' placeholder='0' item={time}></Select>
        </div>
        시
        <div className='select'>
        <Select dvalue={edit.start_m} name='start_m' placeholder='0' item={minute}></Select>
        </div>
        분
        </>:''}

        {props.type == '종료'? 
        <>
                <div className='text'>종료</div>
        <div>{props.time.time.format('YYYY.MM.DD')}</div>

        <div className='select'>
        <Select dvalue={edit.end_d} name='end' placeholder='없음' item={['오전','오후']}></Select>
        </div>
        <div className='select'>
            
        <Select dvalue={edit.end_t} name='end_t' placeholder='없음' item={time}></Select>
        </div>
        시
        <div className='select'>
        <Select dvalue={edit.end_m} name='end_m' placeholder='없음' item={minute}></Select>
        </div>
        분
        </>:''}

        {props.type == '메모'? 
        <>
        <div className='memo'>
            메모 
            <div className='input_memo'>
            <textarea name='content' className='memo_textarea' value = {edit.memo} onChange={(e)=>edit.edit_memo(e.target.value)}/>
            </div>
        </div>
        </>:''}
        </InputTextStyle>
    </>
);
};

export default InputTextComponent;