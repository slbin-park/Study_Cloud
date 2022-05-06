import React from 'react';
import styled, { css } from 'styled-components';
import { StudyPageType } from './studypageType';

const StudyPageStyle = styled.div.attrs((props) => ({}))<StudyPageType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
return css`
    display:flex;
    justify-content: center;
    
`}}
;
`;

export default StudyPageStyle;