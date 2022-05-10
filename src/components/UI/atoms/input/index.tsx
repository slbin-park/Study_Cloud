import React, { useEffect, useState, useRef } from 'react';
import InputComponent from './input';
import {InputType} from './inputType'

const Button: React.FC<InputType> = (props, {
    
}: InputType) => (
<InputComponent {...props} />
);

export default Button;