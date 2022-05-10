import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘

import {faUser,faComment,faFileLines ,faBell ,faPenToSquare , faCircleQuestion ,faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import Link from 'next/link'
import useStore from 'zus/test/index'


import IconTextStyle from './icontextStyle';

const IconTextComponent: React.FC<any> = (props) => {
    let href =  props.href || '/';
    const login = useStore();
    if (props.icon === 'user'){
        href = login.login ? '/' : '/login'; 
    }
    return (
    <>
    <Link href={href}>
        <IconTextStyle {...props} >
            {props.icon == 'user'  ? <><FontAwesomeIcon icon={faUser} className='icon_div'/> {login.login ? '내정보' : '로그인'} </>: ''}
            {props.icon == 'notice' ? <><FontAwesomeIcon icon={faBell} className='icon_div' /> 공지사항 </>: ''}
            {props.icon == 'community' ? <><FontAwesomeIcon icon={faComment} className='icon_div' /> 커뮤니티 </>: ''}
            {props.icon == 'study' ? <> <FontAwesomeIcon icon={faPenToSquare} className='icon_div' /> 학습 기록 보기 </> : ''}
            {props.icon == 'info' ? <><FontAwesomeIcon icon={faCircleQuestion} className='icon_div' /> 도움말</> : ''}
            {props.icon == 'logout' ? <><FontAwesomeIcon icon={faArrowAltCircleRight} className='icon_div' /> 로그아웃</> : ''}
        </IconTextStyle>
        </Link>
    </>
);
};

export default IconTextComponent;