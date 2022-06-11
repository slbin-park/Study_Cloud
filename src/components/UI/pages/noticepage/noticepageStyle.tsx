import React from 'react';
import styled, { css } from 'styled-components';
import { NoticePageType } from './noticepageType';

const NoticePageStyle = styled.div.attrs((props) => ({}))<NoticePageType>`
  ${(props) => {
    const middle = props.theme.palette.$color_middle;
    return css`
      .title_div {
        margin-right: 0;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      h1 {
        color: ${middle};
        margin: 0;
        padding: 0;
      }
      .line {
        border-bottom: 3px solid gray;
        padding-bottom: 10px;
        margin-bottom: 30px;
      }
      .line_table {
      }
    `;
  }};
`;

export default NoticePageStyle;
