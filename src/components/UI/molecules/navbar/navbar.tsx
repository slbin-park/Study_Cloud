import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import NavBarStyle from './navbarStyle';
import Molecules, { IconText } from '../../molecules/index';
const NavBarComponent: React.FC<any> = (props) => {
return (
    <>
        <NavBarStyle onClick={()=>props.set_hamburger(false)}>
            <div className='menu' >
            <IconText icon='user' href='/'/>
            <IconText icon='notice'/>
            <IconText icon='community'/>
            <IconText icon='study' href='/study'/>
            <IconText icon='info'/>
            <IconText icon='logout'/>
            </div>
        </NavBarStyle>
    </>
);
};

export default NavBarComponent;