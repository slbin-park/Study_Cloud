import React from 'react';
import styled, { css } from 'styled-components';
import { textSpanIntersectsWithTextSpan } from 'typescript';
import { MainPageType } from './mainpageType';

const MainPageStyle = styled.div.attrs((props) => ({}))<MainPageType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
    const gray = props.theme.palette.$color_gray;
    const black = props.theme.palette.$color_black;

    
return css`
    display : flex;
    flex-direction: column;
    align-items: center;
    height : 100%;
    font-size : 25px;
    .head_box{
        display : flex;
        flex-direction: column;
        align-items: center;
        background-color : ${middle};
        width : 100%;
        border-radius: 0px 0px 20px 20px;
    }
    .date{
        font-size : 40px;
        padding : 10px;
        color : white;
        display: flex;
        align-items: center;
    }
    
    .name{
        color:white;
        font-weight: bold;
        font-size:30px;
    }

    .time{
        padding : 10px;
        color : white;
        width:100%;
        display:flex;
        align-content:center;
        justify-content: center;
    }

    .start{
        width : 200px;
        position: relative;
        top: 22Px;
        z-index : 1;
    }
    .til{
        margin: 20px;
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
    }
    
`}}
;
`;

export default MainPageStyle;