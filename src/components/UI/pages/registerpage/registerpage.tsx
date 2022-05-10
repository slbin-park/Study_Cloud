import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import RegisterPageStyle from './registerpageStyle';

import {Input,Button} from '../../atoms'

const RegisterPageComponent: React.FC<any> = (props) => {
    
    return (
    <>
        <RegisterPageStyle onSubmit={(e)=>props.onSubmit(e)}>
            회원가입
            
            <div className='input_box'>
            <Input type = 'id' placeholder='아이디'></Input>
            </div>

            <div className='input_box'>
            <Input type = 'password' placeholder='비밀번호'></Input>
            </div>
            
            <div className='input_box'>
            <Input type = 'password_check' placeholder='비민번호 확인'></Input>
            </div>

            <div className='input_box'>
            <Input type = 'school' placeholder='학교'></Input>
            </div>
            
            <div className='input_box'>
            <Input type = 'major' placeholder='전공'></Input>
            </div>

            <div className='button_box'>
                <Button>
                    회원 가입
                </Button>
            </div>
        </RegisterPageStyle>
    </>
);
};

export default RegisterPageComponent;