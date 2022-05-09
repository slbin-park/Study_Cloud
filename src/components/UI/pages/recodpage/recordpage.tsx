import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import RecordPageStyle from './recordpageStyle';
import {Icon} from '../../atoms/index';
import Link from 'next/link'

import {Calendar , Card} from '../../molecules/index';
const RecordPageComponent: React.FC<any> = (props) => {
return (
<>
<RecordPageStyle>
    <Calendar/>
    <div className = 'til'>
        <div className = 'til_head'>
            오늘 한 일
        </div>
        <div className='til_card'>
        <Card/>
        <Card/>
        </div>
    </div>
    <Link href='/study'>
    <div className = 'Icon'>
    <Icon/>
    </div>
    </Link>
</RecordPageStyle>
</>
);
};

export default RecordPageComponent;