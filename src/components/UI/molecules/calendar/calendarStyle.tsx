import React from 'react';
import styled, { css } from 'styled-components';
import { CalendarType } from './calendarType';

const CalendarStyle = styled.div.attrs((props) => ({}))<CalendarType>`
  ${(props) => {
    const middle = props.theme.palette.$color_middle;
    const gray = props.theme.palette.$color_gray;
    const black = props.theme.palette.$color_black;
    return css`
      display: flex;
      justify-content: center;
      .calendar {
        padding-top: 10px;
        height: 50vh;
        width: 100%;
        font-size: 1.5vh;
      }

      .calendar_head {
        display: flex;
        justify-content: center;
        height: 5%;
        align-items: center;
        margin-bottom: 10px;
        .calendar_button {
          cursor: pointer;
          margin: 5px;
          margin-right: 10px;
          margin-left: 10px;
          color: ${black};
          background: ${gray};
          padding: 0.375rem 0.75rem;
          border: 1px solid ${gray};
          border-radius: 5px;
        }
        .calendar_head_text {
          width: 18%;
          display: flex;
          justify-content: center;
          font-size: 2vw;
        }
      }

      .calendar_body {
        display: flex;
        width: 100%;
        height: 90%;
        .calendar_body_box {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          .calendar_body_head {
            border-top: 3px solid ${gray};
            border-bottom: 3px solid ${gray};

            display: flex;
            .calendar_body_head_days {
              display: flex;
              justify-content: center;
              width: 100%;
              font-size: 2vw;
            }
          }

          .calendar_body_line {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            margin-bottom: 10px;
          }
        }
      }
    `;
  }};
`;

const Days_style = styled.div.attrs((props) => ({}))<CalendarType>`
  ${(props) => {
    const middle = props.theme.palette.$color_middle;
    const gray = props.theme.palette.$color_gray;
    const black = props.theme.palette.$color_black;
    const bgColor = props.bgColor ? 'red' : gray;
    let days_color = 'white';
    console.log(props.todo_cnt);
    if (props.todo_cnt >= 10) {
      days_color = '#ff6102';
    } else if (props.todo_cnt >= 7) {
      days_color = '#ff731e';
    } else if (props.todo_cnt >= 5) {
      days_color = '#ff873c';
    } else if (props.todo_cnt >= 3) {
      days_color = '#ffa873';
    } else if (props.todo_cnt >= 1) {
      days_color = '#ffcbac';
    }

    return css`
      background-color: ${days_color};
      cursor: pointer;
      display: flex;
      flex-direction: column;
      border: 2px solid ${bgColor};
      border-radius: 5px;
      margin: 5px;
      width: 100%;
      height: 100%;
      text-align: initial;
      font-size: 2vw;
      padding: 1px;
    `;
  }};
`;

export default CalendarStyle;
export { Days_style };
