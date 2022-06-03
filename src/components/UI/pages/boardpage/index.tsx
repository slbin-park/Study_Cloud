import React, { useEffect, useState, useRef } from 'react';
import BoardPageComponent from './boardpage';
import {BoardPageType} from './boardpageType'

const BoardPage: React.FC<BoardPageType> = (props, {}: BoardPageType) => {
    
    return(
        <BoardPageComponent {...props} />
)};

export default BoardPage