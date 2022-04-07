import React from 'react';
import styled, { css } from 'styled-components';
import { InputType } from './inputType';

const InputStyle = styled.input.attrs((props) => ({}))<InputType>`
${(props) => {
    const middle = props.theme.palette.color_middle;
return css`
      width: 100%;
      height: 40px;
      padding: 0px 10px;
      font-size: 1em;
      font-weight: 500;
      outline: none;
      border: 1px solid ;
      border-radius: 0;
      appearance: none;
      will-change: border;
`}}
;
`;

export default InputStyle;