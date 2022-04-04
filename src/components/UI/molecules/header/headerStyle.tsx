import React from 'react';
import styled, { css } from 'styled-components';
import { HeaderType } from './headerType';

const HeaderStyle = styled.div.attrs((props) => ({}))<HeaderType>`
  ${(props) => {

  return css`
    background-repeat: no-repeat;
    width: 100%;
    height: 45px;
    border: none;
    padding: 5px 10px;
    font-size: 1em;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
  `}}
  ;
`;

export default HeaderStyle;
