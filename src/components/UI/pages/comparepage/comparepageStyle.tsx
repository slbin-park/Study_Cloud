import React from 'react';
import styled, {css} from 'styled-components';
import {ComparePageType} from './comparepageType';

const ComparePageStyle = styled
    .div
    .attrs((props) => ({}))<ComparePageType> `
  ${ (props) => {
        const middle = props.theme.palette.$color_middle;
        const high = props.theme.palette.$color_high;
        return css `
      .content {
        display: flex;
        justify-content: space-between;
        .content_left {
          width: 45%;
        }

        .content_mid {
          border-left: thick solid ${high};
          height: 1000px;
        }

        .content_right {
          width: 45%;
          .content_right_div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      }

      h1 {
        color: ${middle};
        margin: 0;
        padding: 0;
      }
    `;}};
`;

        export default ComparePageStyle;
