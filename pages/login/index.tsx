import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import LoginComponent from 'page/loginPage/index'

const LoginPage: NextPage<any> = ({}) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <LoginComponent />
    </>
  );
};

// LoginPage.getInitialProps = () => {};

export default LoginPage;
