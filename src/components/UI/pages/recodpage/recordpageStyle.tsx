import React from 'react';
import styled, { css } from 'styled-components';
import { RecordPageType } from './recordpageType';

const RecordPageStyle = styled.div.attrs((props) => ({}))<RecordPageType>`
  ${(props) => {
    const middle = props.theme.palette.$color_middle;
    let todo: string;
    let st: string;
    let week: string;
    let month: string;
    if (props.statis) {
      st = `
          color: white;
          background-color: ${middle};
          `;
    } else {
      todo = `
          color: white;
          background-color: ${middle};
          `;
    }

    if (!props.week_month) {
      week = `
            border-bottom: 4px solid ${middle};
          `;
    } else {
      month = `
            border-bottom: 4px solid ${middle};
          `;
    }

    return css`
      .Icon {
        color: ${middle};
        position: fixed;
        z-index: 1;
        bottom: 0;
        right: 0;
        margin-right: 30px;
        margin-bottom: 30px;
        width: 50px;
        height: 50px;
      }
      .til {
        margin-top: 30px;

        width: 100%;
        border-style: solid;
        border-color: ${middle};
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        .til_head {
          margin-top: 5px;
          color: ${middle};
          width: 100%;
          font-size: 20px;
          display: flex;
          justify-content: center;
          text-align: center;
          height: 40px;
          /* 오늘 한 일 */
          .til_head_todo {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40%;
            border-radius: 5px;
            ${todo}
          }
          /* 통계 */
          .til_head_st {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40%;
            border-radius: 5px;
            ${st}
          }
        }

        /* 주간 , 월간 */
        .til_select_St {
          height: 30px;
          margin-top: 10px;
          display: flex;
          justify-content: center;
          text-align: center;
          width: 100%;
          font-size: 17px;
          .til_week {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 10%;
            border-radius: 5px;
            ${week}
          }
          .til_month {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            width: 10%;
            ${month}
          }
        }

        /* 통계 보여주는 박스 */
        .study_avg {
          padding: 10px;
          width: 100%;
          display: flex;
          padding-left: 30%;
          .week_avg {
            display: flex;
            .week_text {
              font-weight: bold;
              color: ${middle};
              display: flex;
            }
          }
          .week_all {
            display: flex;
            .minute_color {
              color: ${middle};
            }
          }
        }
        .til_card {
          width: 80%;
        }
        padding-bottom: 100px;
      }
    `;
  }};
`;

export default RecordPageStyle;
