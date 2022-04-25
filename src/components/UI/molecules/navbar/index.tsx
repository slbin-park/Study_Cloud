import React, { useEffect, useState, useRef } from 'react';
import NavBarComponent from './navbar';
import {NavBarType} from './navbarType';

const Button: React.FC<NavBarType> = (props, {}: NavBarType) => (
<NavBarComponent {...props} />
);

export default Button;