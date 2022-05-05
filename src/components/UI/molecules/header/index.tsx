import React, { useEffect, useState, useRef } from 'react';
import HeaderComponent from './header';

import {HeaderType} from './headerType'


const Header: React.FC<HeaderType> = (props, {}: HeaderType) => {
  
  const [hamburger,set_hamburger] = useState(false);

  return(
    <>
      <HeaderComponent hamburger={hamburger} set_hamburger = {set_hamburger} {...props} />
    </>
  )
};

export default Header;
