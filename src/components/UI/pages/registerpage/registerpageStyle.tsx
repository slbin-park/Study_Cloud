import React from 'react';
import styled, { css } from 'styled-components';
import { RegisterPageType } from './registerpageType';

const RegisterPageStyle = styled.form.attrs((props) => ({}))<RegisterPageType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
return css`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color : ${middle};
    font-size : 30px;
    width : 100%;
    .input_box{
        font-size : 14px;
        width : 100%;
        margin-top : 10px;
    }
    .button_box{
        font-size : 17px;
        margin-top : 20px;
        width : 50%;
    }
`}}
;
`;

export default RegisterPageStyle;