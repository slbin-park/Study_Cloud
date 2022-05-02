import React, { useEffect, useState, useRef } from 'react';
import TimerComponent from './timer';
import {TimerType} from './timerType'

const Button: React.FC<TimerType> = (props, {}: TimerType) => (
<TimerComponent {...props} />
);

export default Button;