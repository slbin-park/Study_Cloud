import React, { useEffect, useState, useRef } from 'react';
import ButtonComponent from './button';

import {ButtonType} from './buttonType'


const Button: React.FC<ButtonType> = (props, {}: ButtonType) => (
  <ButtonComponent {...props} />
);

export default Button;
