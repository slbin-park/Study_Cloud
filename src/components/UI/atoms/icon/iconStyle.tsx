import React from 'react';
import styled, { css } from 'styled-components';
import { IconType } from './iconType';

const IconStyle = styled.div.attrs((props) => ({}))<IconType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
return css`
    width:100%;
    height:100%;
    cursor:pointer;
    border-radius:25px;
    box-shadow: 0px 0px 5px ;
    :active{
      margin-left:2px;
      margin-top:2px;
      box-shadow: none;
    }
`}}
;
`;

export default IconStyle;