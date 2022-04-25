import React, { useEffect, useState, useRef } from 'react';
import BoardComponent from './board';
import {BoardType} from './boardType'

const Board: React.FC<BoardType> = (props, {}: BoardType) => (
    <>
<BoardComponent {...props} />
</>
);

export default Board;