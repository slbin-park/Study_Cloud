import React from 'react';
import styled, { css } from 'styled-components';
import { IconType } from './iconType';

const IconStyle = styled.div.attrs((props) => ({}))<IconType>`
${(props) => {
    const middle = props.theme.palette.color_middle;
return css`
    width:100%;
    height:100%;
`}}
;
`;

export default IconStyle;