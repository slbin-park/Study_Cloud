import React from 'react';
import styled, { css } from 'styled-components';
import { RegisterPageType } from './registerpageType';

const RegisterPageStyle = styled.div.attrs((props) => ({}))<RegisterPageType>`
${(props) => {
    const middle = props.theme.palette.color_middle;
return css`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width : 100%;
    .input_box{
        width : 100%;
        margin-top : 10px;
    }
`}}
;
`;

export default RegisterPageStyle;