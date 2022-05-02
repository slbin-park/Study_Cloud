import React from 'react';
import styled, { css } from 'styled-components';
import { HeaderType } from './headerType';

const HeaderStyle = styled.div.attrs((props) => ({}))<HeaderType>`
  ${(props) => {
    const middle = props.theme.palette.$color_middle;
    const high = props.theme.palette.$color_high;
    
  return css`
		position: fixed;
    display:flex;
    width: 100%;
    height: 70px;
    background-color: ${middle};
    justify-content: space-between;
    align-content: center;
    align-items: center;

    .title_div{
        color:white;
        margin-left:20px;
        font-size:20px;
        cursor:pointer;
    }
    .Icon_div{
        margin-right: 20px;
        display:flex;
        justify-content: flex-end;
        align-content: center;
        align-items: center;
        height:100%;
        
    }
  `}}
  ;
`;

export default HeaderStyle;
