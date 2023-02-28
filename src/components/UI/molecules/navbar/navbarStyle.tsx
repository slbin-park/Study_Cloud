import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { NavBarType } from './navbarType';

const NavBarStyle = styled.div.attrs((props) => ({}))<NavBarType>`
  ${(props) => {
    const middle = props.theme.palette.$color_middle;
    const appear = props.hamburger ? '30%' : '0%';
    const animation = keyframes`
        0% {
            width: 10%;
        }
        50% {
            width: 20%;
        }
        100% {
            width: 30%;
        }
        `;
    return css`
      animation: ${animation} 0.1s linear;
      transition: all 0.3s;
      background-color: white;
      z-index: 10;
      border-left: 2px solid ${middle};
      width: ${appear};
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      margin-top: 70px;
      .menu {
        margin: 10%;
      }
    `;
  }};
`;

export default NavBarStyle;
