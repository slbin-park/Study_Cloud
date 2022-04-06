import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledHeader from './headerStyle';
import Atoms, { Input, Select } from '../../atoms/index';



const ButtonComponent: React.FC<any> = (props) => {
  return (
    <StyledHeader onClick={props.onClick} {...props}>
        <div className='title_div'>
            학습관리 페이지
        </div>
        <div className='Icon_div'>
          <Input />
        <FontAwesomeIcon icon={faSearch} style={{height:'40%',marginLeft:'10px',marginRight:'10px',color:'white'}}/>
        <FontAwesomeIcon icon={faBars} style={{height:'40%',color:'white'}}/>
        </div>
    </StyledHeader>
  );
};

export default ButtonComponent;
