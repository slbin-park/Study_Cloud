import React from 'react';
import styled, { css } from 'styled-components';
import { RecordPageType } from './recordpageType';

const RecordPageStyle = styled.div.attrs((props) => ({}))<RecordPageType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
return css`
    .Icon{
        color:${middle};
        position: fixed;
        z-index: 1;
        bottom:0;
        right:0;
        margin-right:30px;
        margin-bottom:30px;
        width:50px;
        height:50px;
        
    }
    .til{
        margin-top :30px;
        
        width : 100%;
        border-style : solid;
        border-color : ${middle};
        background-color : white;
        display : flex;
        flex-direction: column;
        align-items: center;
        .til_head{
            margin-top : 5px;
            color : ${middle};
        }
        .til_card{
            width:80%;
        }
        padding-bottom : 100px;
    }
`}}
;
`;

export default RecordPageStyle;