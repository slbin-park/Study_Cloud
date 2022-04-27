import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import CardStyle from './cardStyle';


const CardComponent: React.FC<any> = (props) => {
return (
        <>
            <CardStyle>
                <div className='title'>
                    제목입니다.
                </div>
                <div className='comment'>  
                    내용입니다.

                </div>
            </CardStyle>
        </>
);
};

export default CardComponent;