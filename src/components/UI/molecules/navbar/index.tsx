import React, { useEffect, useState, useRef } from 'react';
import NavBarComponent from './navbar';
import {NavBarType} from './navbarType';

const NavBar: React.FC<NavBarType> = (props, {}: NavBarType) => (
    <>
        <NavBarComponent {...props} />
    </>
);

export default NavBar;