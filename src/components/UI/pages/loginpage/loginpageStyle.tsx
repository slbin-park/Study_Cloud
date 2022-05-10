import React from 'react';
import styled, { css } from 'styled-components';
import { LoginPageType } from './loginpageType';

const LoginPageStyle = styled.div.attrs((props) => ({}))<LoginPageType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
return css`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;

    .icon{
        width:100px;
        height:100px;
        color:${middle};
    }

    .input_line{
        width:50%;
        margin-top : 20px;
    }
    .login{
        margin-top : 30px;
        margin-bottom : 0px;
        width:30%;
    }
`}}
;
`;

export default LoginPageStyle;