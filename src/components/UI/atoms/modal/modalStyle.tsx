import React from 'react';
import styled, { css,keyframes } from 'styled-components';
import { ModalType } from './modalType';
import useStore from 'zus/modal/modal';
const ModalStyle = styled.div.attrs((props) => ({}))<ModalType>`
${(props) => {
    const show_modal = props.modal.modal ? 'flex' : 'none' ; 
    const middle = props.theme.palette.$color_middle;
    const high = props.theme.palette.$color_high;

    const animation = keyframes`
        0% {
            width: 15%;
            height: 15%;
        }
        50% {
            width: 23%;
            height: 23%;
        }
        100% {
            width: 50%;
            height: 30%;
        }
        `;
    const animation_board = keyframes`
        0% {
            width: 30%;
            height: 30%;
        }
        50% {
            width: 50%;
            height: 50%;
        }
        100% {
            width: 70%;
            height: 70%;
        }
        `;

return css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: ${show_modal};
    z-index : 5;
    justify-content: center;
    align-items: center;
    height : ${props.modal ? '100vh' : '0vh'};
    visibility: ${props.modal ? 'visible' : 'hidden'};
    background-color: #ffffff;
    /* background-color: rgba( 255, 255, 255, 0.5 ); */
    background-color: rgba(0, 0, 0, 0.1);

    /* 기본 모달 */
    .modal_div{
        animation: ${animation} 0.1s linear;
        transition: all 0.4s;
        /* filter: blur(0px); */
        z-index: 9999;
        border-radius : 5px;
        background-color: white;
        padding : 5%;
        height: 30%;
        width: 50%;
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        align-items: center;
        .modal_title{
            color : ${middle};
            font-size: 2vh;
            height: 10%;
            width: 100%;
            margin-bottom:40px;
        }
        .modal_button{
            width:50%;
            height:40px;
        }
    }

    /* 게시글 모달 */
    .board_div::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
    }
    .board_div{
        box-sizing: border-box;
        overflow-y: auto;
        
        animation: ${animation_board} 0.1s linear;
        transition: all 0.4s;
        /* filter: blur(0px); */
        z-index: 9999;
        border-radius : 5px;
        background-color: white;
        height: 80%;
        padding-bottom : 10%;
        width: 70%;
        display: flex;
        justify-content: flex-start;
        text-align: center;
        flex-direction: column;
        align-items: center;

        .board_title{
            display:flex;
            padding:10px;
            background-color: ${middle};
            color : white;
            font-size: 4vh;
            height: 10%;
            width: 100%;
            align-items: center;
            justify-content: center;
        }
        .board_info{
            box-sizing: border-box;
            padding:5px;
            width:100%;
            color : ${middle};
            border-bottom: ${middle} solid 2px;
            display:flex;
            align-items: center;
            justify-content: flex-end;
        }

        .board_content_div{
            box-sizing: border-box;
            color : ${middle};
            font-size: 3vh;
            width: 100%;
            padding:30px;
            .board_content{
                border-bottom : ${middle} solid 2px;
                padding : 20px;  
                padding-top : 10px;              
            }
        }



        .board_reply_div{
            box-sizing: border-box;
            width:100%;
            display:flex;
            flex-direction: column;
            align-items: flex-start;
            padding-left : 10%;
            padding-right : 10%;
            padding-bottom : 20px;
            color : ${high};
            .board_reply_name{
                font-size:17px;
                margin-bottom: 5px;
            }
            .board_reply_date{
                font-size:11px;
                margin-bottom:5px;
            }
            .board_reply_comment{
                display:flex;
                justify-content: flex-start;
                width:100%;
                font-size:14px;
                padding-bottom:5px;
                border-bottom : ${high} solid 2px;
            }
        }

        .board_reply_input{
            display:flex;
            width : 80%;
            height: 50px;
            margin-bottom:20px;
            .board_reply_button{
                width:20%;
                margin-left : 10px;
            }
        }
    }
    input{
        outline:none;
        border: 2px solid ${high};
        border-radius: 10px ;
        background-color:white;
        height : 40px;
        width:70%;
        margin-left:20px;
        padding-left: 10px;
    }
    button{
        height:100%;
        font-size : 15px;
    }
`}}
;
`;

export default ModalStyle;