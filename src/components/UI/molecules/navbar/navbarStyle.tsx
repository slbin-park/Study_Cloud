import React from 'react';
import styled, { css } from 'styled-components';
import { NavBarType } from './navbarType';

const NavBarStyle = styled.div.attrs((props) => ({}))<NavBarType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
    return css`
        background-color: white;
        z-index: 9999;
		border-left: 2px solid ${middle};
		width: 30%;
		position: fixed;
		top: 0;
		right: 0;
        height : 100%;
        margin-top:70px;
        .menu{
            margin:10%;
            
        }
`}}
;
`;

export default NavBarStyle;