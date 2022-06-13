import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { NotiBarType } from './notibarType';

const NotiBarStyle = styled.div.attrs((props) => ({}))<NotiBarType>`
  ${(props) => {
    const middle = props.theme.palette.$color_middle;
    const appear = props.appear ? 'flex' : 'none';
    const animation = keyframes`
        0% {
            height: 30%;
        }
        50% {
            height: 60%;
        }
        100% {
            height: 90%;
        }
        `;
    return css`
      overflow: scroll;
      display: ${appear};
      animation: ${animation} 0.1s linear;
      transition: all 0.3s;
      z-index: 200;
      width: 40%;
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      padding-top: 70px;
      padding-bottom: 100px;
      flex-direction: column;
      justify-content: flex-end;
      .menu {
        margin: 10%;
      }
    `;
  }};
`;

export default NotiBarStyle;
