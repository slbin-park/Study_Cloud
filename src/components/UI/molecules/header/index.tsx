import React, { useEffect, useState, useRef } from 'react';
import HeaderComponent from './header';

import {HeaderType} from './headerType'


const Header: React.FC<HeaderType> = (props, {}: HeaderType) => {
  

  return(
    <>
      <HeaderComponent {...props} />
    </>
  )
};

export default Header;
