import React from 'react';
import styled, { css } from 'styled-components';
import { InputTextType } from './inputtextType';

const InputTextStyle = styled.div.attrs((props) => ({}))<InputTextType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
    const gray = props.theme.palette.$color_gray;
    const black = props.theme.palette.$color_black;

return css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color : ${gray};
    color : ${black};
    margin : 20px;
    padding : 20px;
    border-radius: 10px;
    font-size : 20px;
    height : 45px;
    width : 80%;

    .text{

    }

    .select{
        width:20%;
    }

    input{
        outline:none;
        border:none;
        border-radius: 10px;
        background-color:white;
        height : 40px;
        width:70%;
        margin-left:20px;
        padding-left: 10px;
    }
`}}
;
`;

export default InputTextStyle;