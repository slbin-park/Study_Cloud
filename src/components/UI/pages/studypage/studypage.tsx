import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import StudyPageStyle from './studypageStyle';
import {InputText} from '../../molecules';
import {Button} from '../../atoms';

const StudyPageComponent: React.FC<any> = (props) => {
return (
<>
    <StudyPageStyle onSubmit={(e)=>props.onSubmit(e)}>
        <div className='line_text'> 
        <InputText type='제목'/>
        </div>
        <div className='line_text'> 
        <InputText type='시작'/>
        
        </div>
        <div className='line_text'> 
        <InputText type='종료'/>
        </div>
        <div className='memo'> 
        <InputText type='메모'/>
        </div>
        <div className='commit'>
        <Button> 등록 </Button>
        </div>



    </StudyPageStyle>
</>
);
};

export default StudyPageComponent;