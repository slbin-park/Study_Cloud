import React from 'react';
import styled, { css } from 'styled-components';
import { CardType } from '../../cardType';

const Regular_Style = styled.div.attrs((props) => ({}))<CardType>`
  ${(props) => {
    const base = props.theme.palette.$color_base;
    return css`
      width: 100%;
      height: auto;
      background-color: ${base};
      border-radius: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
      color: white;
      cursor: pointer;
      padding: 1px;
      .title {
        padding-left: 30px;
        padding-right: 30px;
        font-size: 25px;
        padding-top: 20px;
        border-bottom: white 3px solid;
        display: flex;
        justify-content: space-between;
      }
      .comment {
        display: flex;
        justify-content: center;
        padding: 30px;
        font-size: 20px;
      }
      :active {
        margin-left: 5px;
        margin-top: 30px;
      }
    `;
  }};
`;

export default Regular_Style;
