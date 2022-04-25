import React, { useEffect, useState, useRef } from 'react';
import LineTextComponent from './linetext';
import {LineTextType} from './linetextType'

const Button: React.FC<LineTextType> = (props, {}: LineTextType) => (
<LineTextComponent {...props} />
);

export default Button;