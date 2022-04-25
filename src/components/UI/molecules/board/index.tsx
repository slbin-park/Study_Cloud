import React, { useEffect, useState, useRef } from 'react';
import BoardComponent from './board';
import {BoardType} from './boardType'

const Button: React.FC<BoardType> = (props, {}: BoardType) => (
<BoardComponent {...props} />
);

export default Button;