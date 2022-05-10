import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import RegisterPageStyle from './registerpageStyle';

import {Input} from '../../atoms'

const RegisterPageComponent: React.FC<any> = (props) => {
return (
    <>
        <RegisterPageStyle>
            회원가입
            <div className='input_box'>
            <Input placeholder='아이디'></Input>
            </div>

            <div className='input_box'>
            <Input placeholder='비밀번호'></Input>
            </div>
            
            <div className='input_box'>
            <Input placeholder='비민번호 확인'></Input>
            </div>

            <div className='input_box'>
            <Input placeholder='학교'></Input>
            </div>
            
            <div className='input_box'>
            <Input placeholder='전공'></Input>
            </div>

        </RegisterPageStyle>
    </>
);
};

export default RegisterPageComponent;