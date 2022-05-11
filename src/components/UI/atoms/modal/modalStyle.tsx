import React from 'react';
import styled, { css } from 'styled-components';
import { ModalType } from './modalType';

const ModalStyle = styled.div.attrs((props) => ({}))<ModalType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
return css`

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: center;
    align-items: center;
    display:flex;
    .modal_div{
        background-color: white;
        padding : 5%;
        height: 30%;
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