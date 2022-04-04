import React, { useEffect, useState, useRef } from 'react';
import InputComponent from './Input';
import {InputType} from './InputType'

const Button: React.FC<InputType> = (props, {}: InputType) => (
<InputComponent {...props} />
);

export default Button;