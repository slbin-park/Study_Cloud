import React from 'react';
import styled, { css } from 'styled-components';
import { CardType } from '../../cardType';

// 마진 상쇄 규칙 예외 display flex 하면 편함
// 박스가 position: absolute 된 상태
// 박스가 float: left/right 된 상태 (단, clear 되지 않은 상태)
// 박스가 display: flex 일 때 내부 flexbox item
// 박스가 display: grid 일 때 내부 grid item

const Board_Style = styled.div.attrs((props) => ({}))<CardType>`
  ${(props) => {
    const base = props.theme.palette.$color_base;
    return css`
      width: 100%;
      height: auto;
      background-color: ${base};
      border-radius: 20px;
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
        .title_right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .title_date {
            font-size: 17px;
            margin-right: 10px;
          }
        }
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
      .r_icon {
        box-sizing: border-box;
        padding: 12px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 20px;
      }
    `;
  }};
`;

export default Board_Style;
