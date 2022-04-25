import React, { useEffect, useState, useRef } from 'react';
import IconTextComponent from './icontext';
import {IconTextType} from './icontextType'

const Button: React.FC<IconTextType> = (props, {}: IconTextType) => (
<IconTextComponent {...props} />
);

export default Button;