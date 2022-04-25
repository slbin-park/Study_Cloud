import React from 'react';
import styled, { css } from 'styled-components';
import { BoardType } from './boardType';

const BoardStyle = styled.div.attrs((props) => ({}))<BoardType>`
${(props) => {
    const middle = props.theme.palette.color_middle;
return css`
    .head{
        font-size : 30px;
        font-weight : bold;
        margin-left : 10px;
    }
    .line{
        border-bottom: 3px solid gray;
        padding-bottom : 10px;
        margin-bottom : 30px;
    }
    .line_table{
        margin : 10px;
    }
`}}
;
`;

export default BoardStyle;