import React, { useEffect, useState, useRef } from 'react';
import HeaderComponent from './header';

import {HeaderType} from './headerType'


const Button: React.FC<HeaderType> = (props, {}: HeaderType) => (
  <HeaderComponent {...props} />
);

export default Button;
