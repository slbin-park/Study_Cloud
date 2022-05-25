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
import Link from 'next/link'


const ModalComponent: React.FC<any> = (props) => {
    const modal = useStore();
    const modal_click = async ()=>{
        modal.set_modal();
        if(modal.modal_success === true){
            modal.set_modal_success();
        }
    }
return (
    <>
        <ModalStyle {...props}>
            <div className='modal_div'>
                <div className='modal_title'>
                    {modal.modal_text}
                </div>
                <div className='modal_button'>
                
                {modal.modal_success ? 
                    <Link href='/'>
                        <Button onClick={modal_click}>
                            확인
                        </Button>
                    </Link>
                :
                <Button onClick={modal_click}>
                확인
                </Button>
                } 
                </div>
            </div>
        </ModalStyle>
    </>
    );
};

export default ModalComponent;