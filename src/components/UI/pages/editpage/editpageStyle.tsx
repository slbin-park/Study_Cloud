import React from 'react';
import styled, { css } from 'styled-components';
import { EditPageType } from './editpageType';

const EditPageStyle = styled.form.attrs((props) => ({}))<EditPageType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
return css`
 display:flex;
    justify-content: center;
    flex-direction : column;
    height:80vh;
    align-items: center;
    width:100%;
    .line_text{
        width:80%;
        height:20%;
        margin-bottom:5%;
    }
    .memo{
        width:80%;
    }
    .commit{
        margin:5%;
        padding-left : 20%;
        padding-right : 20%;

        width:100%;
        display:flex;
        justify-content: space-between;
    }
    .button_div{
        width:30%;
        display:flex;
        justify-content: space-between;
    }
`}}
;
`;

export default EditPageStyle;