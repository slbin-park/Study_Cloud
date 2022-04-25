import React from 'react';
import styled, { css } from 'styled-components';
import { LineTextType } from './linetextType';

const LineTextStyle = styled.div.attrs((props) => ({}))<LineTextType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
return css`
    display:flex;
    align-items: flex-end;
    border-bottom: 1px solid gray;
    padding-bottom:5px;
    padding-top:5px;

    .date{
        font-size: 13px;
        color : gray;
        margin-right:10px;
    }

    .notice{
        font-size : 15px;
        margin-right:10px;

    }

    .detail{
        font-size : 13px;
        margin-right:3px;
    }

    .comment{
        color : ${middle};
        font-size:13px;
    }
`}}
;
`;

export default LineTextStyle;