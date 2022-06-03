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
const  modal_init = {
    modal_text:'텍스트입니다.',
    modal : true,
}
const click_init = ()=>{
    console.log(1234)
}

const ModalComponent: React.FC<any> = (props) => {

    const modal = props.modal;
    const modal_click = props.modal_click ;

    return (
    <>
        <ModalStyle {...props} >
            {props.test ? 
            <div className='board_div'>
                <div className='board_title'>
                    제목입니다.
                </div>
                <div className='board_info'>
                    작성자 : 송승준
                </div>
                <div className='board_content_div'>
                    <div className='board_content'>
                    저능 멍청이 입니다.
                    <br/>
                    오전 1시 30분
                    <br/>
                    오후 1시 30분
                    </div>
                </div>
                <div className='board_reply_div'>
                    
                </div>
            </div>
            :
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
            }
        </ModalStyle>
    </>
    );
};

export default ModalComponent;