import React from 'react';
import styled, { css,keyframes } from 'styled-components';
import { ModalType } from './modalType';
import useStore from 'zus/modal/modal';
const ModalStyle = styled.div.attrs((props) => ({}))<ModalType>`
${(props) => {
    const show_modal = props.modal.modal ? 'flex' : 'none' ; 
    const middle = props.theme.palette.$color_middle;
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
            width: 30%;
            height: 30%;
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
            height:20%;
        }
    }

    .board_div{
        animation: ${animation} 0.1s linear;
        transition: all 0.4s;
        /* filter: blur(0px); */
        z-index: 9999;
        border-radius : 5px;
        background-color: white;
        height: 100%;
        margin-top : 10%;
        width: 70%;
        display: flex;
        justify-content: flex-start;
        text-align: center;
        flex-direction: column;
        align-items: center;
        .board_title{
            display:flex;
            background-color: ${middle};
            color : white;
            font-size: 5vh;
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
            font-size: 5vh;
            height: 100%;
            width: 100%;
            padding:10%;
            .board_content{
                border-bottom : ${middle} solid 2px;
                padding : 20px;  
                padding-top : 10px;              
            }
        }
    }
`}}
;
`;

export default ModalStyle;