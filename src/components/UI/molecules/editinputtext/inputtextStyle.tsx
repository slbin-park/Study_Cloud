import React from 'react';
import styled, { css } from 'styled-components';
import { InputTextType } from './inputtextType';

const InputTextStyle = styled.div.attrs((props) => ({}))<InputTextType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
    const gray = props.theme.palette.$color_gray;
    const black = props.theme.palette.$color_black;
    const height = props.type === '메모' ? '100px' : '45px';
return css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color : ${gray};
    color : ${black};
    border-radius: 10px;
    font-size : 14px;
    height : 100%;
    width : 100%;

    .text{

    }

    .select{
        width:20%;
    }
    .memo{
        display : flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width : 80%;
    }
    .input_memo{
        display : flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width : 100%;
        height:100px;
    }
    .memo_textarea{
        resize: none; /* 사용자 임의 변경 불가 */
        width:80%;
        height:70%;
        text-align: center;
    }
    input{
        outline:none;
        border:none;
        border-radius: 10px;
        background-color:white;
        height : 80%;
        width:70%;
        margin-left:20px;
        padding-left: 10px;
    }
`}}
;
`;

export default InputTextStyle;