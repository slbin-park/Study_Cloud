import React from 'react';
import styled, { css } from 'styled-components';
import { IconTextType } from './icontextType';

const IconTextStyle = styled.div.attrs((props) => ({}))<IconTextType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
return css`
    color: #262626;
    border-bottom:1px solid gray;
    padding-bottom:10px;
    margin-bottom:5px;
    margin-top:5px;
    height:30px;
    padding :7px;
    .icon_div{
        color :${middle} ;
        height : 100% ;
        padding-right : 5px;
    }
`}}
;
`;

export default IconTextStyle;