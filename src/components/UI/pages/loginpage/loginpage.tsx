import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faUser} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import useStore from 'zus/test/index'
import {Input,Button} from '../../atoms' 
import Link from 'next/link'

import LoginPageStyle from './loginpageStyle';

const LoginPageComponent: React.FC<any> = (props) => {
    const login = useStore();
return (
    <>
        <LoginPageStyle>
            <FontAwesomeIcon icon={faUser} className='icon'/>
            <div className='input_line'>
                <Input placeholder='ID'/>
            </div>
            <div className='input_line'>
                <Input placeholder='Password'/>
            </div>
            <div className='login'>
                <Button onClick={login.success_login}>
                    login
                </Button>
            </div>
            <Link href='/register'>
            <div className='login'>
                <Button >
                    register
                </Button>
            </div>
            </Link>
        </LoginPageStyle>
    </>
);
};

export default LoginPageComponent;