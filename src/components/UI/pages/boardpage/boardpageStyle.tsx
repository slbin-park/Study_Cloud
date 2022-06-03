import React from 'react';
import styled, { css } from 'styled-components';
import { BoardPageType } from './boardpageType';

const BoardPageStyle = styled.div.attrs((props) => ({}))<BoardPageType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
return css`
    .title_div{
        margin-right:0;
        display:flex;
        justify-content: space-between;
    }
    .title_right{
        width:35%;
        display:flex;
    }
    .title_right_icon{
        cursor: pointer;
        color:middle;
        margin-left:5px;
        height:45px;
        width:45px;
    }
    h1{
        margin:0;
        padding:0;
    }
`}}
;
`;

export default BoardPageStyle;