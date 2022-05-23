import React, { useEffect, useState, useRef } from 'react';
import InputTextComponent from './inputtext';
import {InputTextType} from './inputtextType'
import useStore from 'zus/time/time'
const Button: React.FC<InputTextType> = (props, {}: InputTextType) => {
    const time = useStore();

    return(
    <InputTextComponent {...props} time={time}/>
)};

export default Button;