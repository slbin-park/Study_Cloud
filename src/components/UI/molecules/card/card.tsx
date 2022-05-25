import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import Link from 'next/link'

import CardStyle from './cardStyle';


const CardComponent: React.FC<any> = (props) => {
return (
        <>
            <CardStyle {...props} onClick={(e)=>props.card_click(e,props.data)}>
            <Link href='/study'>
                <>
                <div className='title'>
                    <div>
                    {props.data.title || '제목입니다.'}
                    </div>
                    <div>
                    {
                        props.cal(props.data.start_time,props.data.end_time)
                    }분
                    </div>
                </div>
                <div className='comment'>  
                    {props.data.memo || '내용입니다.'}
                </div>
                </>
            </Link>
            </CardStyle>
        </>
);
};

export default CardComponent;