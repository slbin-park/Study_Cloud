import React, { useEffect, useState, useRef } from 'react';
import InputTextComponent from './inputtext';
import {InputTextType} from './inputtextType'

const Button: React.FC<InputTextType> = (props, {}: InputTextType) => (
<InputTextComponent {...props} />
);

export default Button;