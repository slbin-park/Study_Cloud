import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import Atoms , {Button} from '../'
import ModalStyle from './modalStyle';
import useStore from 'zus/modal/modal'

const ModalComponent: React.FC<any> = (props) => {
    const modal = useStore();
return (
    <>
        <ModalStyle {...props}>
            <div className='modal_div'>
                <div className='modal_title'>
                    {modal.modal_text}
                </div>
                <div className='modal_button'>
                <Button onClick={modal.set_modal}>
                    확인
                </Button>
                </div>
            </div>
        </ModalStyle>
    </>
    );
};

export default ModalComponent;