import React from 'react';
import styled, { css } from 'styled-components';
import { NavBarType } from './navbarType';

const NavBarStyle = styled.div.attrs((props) => ({}))<NavBarType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
    const width = props.hamburger ? '30%' : '0%'; 
    return css`
        transition: all 0.3s;
        background-color: white;
        z-index: 9999;
		border-left: 2px solid ${middle};
		width: ${width};
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