import React, { useEffect, useState, useRef } from 'react';
import NavBarComponent from './navbar';
import { NavBarType } from './navbarType';
import useStore_user from 'zus/user/user';
import useStore_login from 'zus/test/index';

const NavBar: React.FC<NavBarType> = (props, {}: NavBarType) => {
  const user = useStore_user();
  const login = useStore_login();
  const init = {
    id: '',
    name: '',
    major: '',
    school: '',
    access_token: '',
  };

  const logout = () => {
    localStorage.removeItem('token');
    user.set_user(init);
    login.fail_login();
  };
  return (
    <>
      <NavBarComponent {...props} logout={logout} />
    </>
  );
};

export default NavBar;
