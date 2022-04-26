import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonType } from './buttonType';

const StyledButton = styled.button.attrs((props) => ({}))<ButtonType>`
  ${(props) => {
    const high = props.theme.palette.$color_high;
  return css`
    color:white;
    background-color : ${high};
    border-radius: 25px;
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

export default StyledButton;
