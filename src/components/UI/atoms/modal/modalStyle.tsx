import React from 'react';
import styled, { css } from 'styled-components';
import { ModalType } from './modalType';
import useStore from 'zus/modal/modal';
const ModalStyle = styled.div.attrs((props) => ({}))<ModalType>`
${(props) => {

    const middle = props.theme.palette.$color_middle;
return css`
    transition: all 0.4s;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.65);
    /* filter: blur(5px);
    -webkit-filter: blur(5px); */
    display: flex;
    justify-content: center;
    align-items: center;
    height : ${props.modal ? '100vh' : '0vh'};
    visibility: ${props.modal ? 'visible' : 'hidden'};
    z-index : 10;

    .modal_div{
        z-index: 9999;
        border-radius : 5px;
        background-color: white;
        padding : 5%;
        height: 20%;
        width: 30%;
        display: flex;
        justify-content: center;
        text-align: center;
        .modal_title{
            color : ${middle};
            font-size: 4vh;
            height: 10%;
            width: 100%;
        }
    }
`}}
;
`;

export default ModalStyle;