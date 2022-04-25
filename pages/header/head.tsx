import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { NextPage } from 'next';
import Head from 'next/head';

// import RegisterComponent from 'UIpages/auth/register/index';
import HeaderComponent  from '../../src/components/pages/header/index';

const RegisterPage: NextPage<any> = ({}) => {
  return (
    <>
      <HeaderComponent />
    </>
  );
};

// RegisterPage.getInitialProps = () => {};

export default RegisterPage;
