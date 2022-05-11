import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import ModalStyle from './modalStyle';

const ModalComponent: React.FC<any> = (props) => {
return (
    <>
        <ModalStyle {...props}>
            <div className='modal_div'>
                <div className='modal_title'>
                    제목입니다.
                </div>
            </div>
        </ModalStyle>
    </>
    );
};

export default ModalComponent;