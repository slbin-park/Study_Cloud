import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import EditPageStyle from './editpageStyle';
import {EditInputText} from '../../molecules';
import {Button} from '../../atoms';

const EditPageComponent: React.FC<any> = (props) => {
return (
<>
<EditPageStyle onSubmit={(e)=>props.onSubmit(e)}>
        <div className='line_text'> 
        <EditInputText type='제목'/>
        </div>
        <div className='line_text'> 
        <EditInputText type='시작'/>
        
        </div>
        <div className='line_text'> 
        <EditInputText type='종료'/>
        </div>
        <div className='memo'> 
        <EditInputText type='메모'/>
        </div>
        <div className='commit'>
            <div className='button_div'>
            <Button> 수정 </Button>
            </div>
            <div className='button_div'>
            <Button onClick={(e)=>props.onclick2(e)}> 삭제 </Button>
            </div>
        </div>



    </EditPageStyle>
</>
);
};

export default EditPageComponent;