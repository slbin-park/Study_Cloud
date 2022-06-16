import React from 'react';
import styled, { css } from 'styled-components';
import { NotiLineType } from './notilineType';

const NotiLineStyle = styled.div.attrs((props) => ({}))<NotiLineType>`
  ${(props) => {
    const middle = props.theme.palette.$color_high;
    const gray = props.theme.palette.$color_gray;

    return css`
      cursor: pointer;
      border: 3px solid ${middle};
      background-color: white;
      border-radius: 5px;
      padding: 3px;
      margin: 4px;
      display: flex;
      color: ${middle};
      align-items: center;
      .noti_Icon {
        width: 35px;
        height: 35px;
        color: ${middle};
        margin-right: 3px;
      }
      .noti_title {
        font-weight: bold;
        display: flex;
        align-items: flex-end;
        font-size: 20px;
        .noti_title_date {
          color: gray;
          font-size: 12px;
        }
      }
      .noti_reply {
        margin-top: 7px;
        margin-bottom: 7px;
        margin-left: 10px;
        font-size: 15px;
      }
      .noti_id {
        font-size: 12px;
        margin-left: 10px;
        color: gray;
      }
    `;
  }};
`;

export default NotiLineStyle;
