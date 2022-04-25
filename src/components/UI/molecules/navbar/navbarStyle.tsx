import React from 'react';
import styled, { css } from 'styled-components';
import { NavBarType } from './navbarType';

const NavBarStyle = styled.div.attrs((props) => ({}))<NavBarType>`
${(props) => {
    const middle = props.theme.palette.color_middle;
return css`
`}}
;
`;

export default NavBarStyle;