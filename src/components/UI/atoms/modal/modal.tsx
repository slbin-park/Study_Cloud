import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faCommentDots,faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import Atoms , {Button,Input} from '../';
import ModalStyle from './modalStyle';
import useStore from 'zus/modal/modal';
import Link from 'next/link';
import moment from 'moment';

const  modal_init = {
    modal_text:'텍스트입니다.',
    modal : true,
}
const click_init = ()=>{
    console.log(1234)
}
const cal = (a ,b) =>{
    a = moment(a,'HH:mm:ss')
    b = moment(b,'HH:mm:ss')
    return moment.duration(b.diff(a)).asMinutes()
}

const ModalComponent: React.FC<any> = (props) => {

    const modal = props.modal;
    const modal_click = props.modal_click ;
    const modal_ref = props.modal_ref;
    const modal_close = props.modal_close;
    return (
    <>
        <ModalStyle {...props}  onMouseDown={modal_close} >
            {props.test ? 
                <div ref={modal_ref} className='board_div'>
                <div className='board_title'>
                    {props.board.title}
                </div>
                <div className='board_info'>
                    작성자 : {props.board.id}
                </div>
                <div className='board_content_div'>
                    <div className='board_content'>
                    {props.board.memo}
                    <br/>
                    <br/>
                    시작시간 : {props.board.start_time}
                    <br/>
                    종료시간 : {props.board.end_time}
                    <br/>
                    <br/>
                    총 시간 : {cal(props.board.start_time,props.board.end_time)} 분
                    </div>
                </div>
                <div className='board_reply_input'>
                    <input type='text'></input>
                    <div className='board_reply_button'>
                        <Button>
                            등록
                        </Button>
                    </div>
                </div>
                {Array(5).fill(0).map(()=>{
                    return(
                    <div className='board_reply_div' >
                    <div className='board_reply_name'>
                        박슬빈
                    </div>
                    <div className='board_reply_date'>
                        2022-06-30
                    </div>
                    <div className='board_reply_comment'>
                        댓글입니다.
                    </div>
                    </div>
                    )
                })}
                
            </div>
            :
            <div ref={modal_ref} className='modal_div'>
                <div className='modal_title'>
                    {modal.modal_text}
                </div>
                <div className='modal_button'>
                        <Button onClick={modal_click}>
                            확인
                        </Button>
                </div>
            </div>
            }
        </ModalStyle>
    </>
    );
};

export default ModalComponent;