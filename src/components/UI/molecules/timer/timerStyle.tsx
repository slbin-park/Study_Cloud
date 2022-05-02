import React from 'react';
import styled, { css } from 'styled-components';
import { TimerType } from './timerType';

const TimerStyle = styled.div.attrs((props) => ({}))<TimerType>`
${(props) => {
    const middle = props.theme.palette.color_middle;
return css`
`}}
;
`;

export default TimerStyle;