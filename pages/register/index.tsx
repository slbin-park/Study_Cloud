import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import RegisterComponent from 'page/registerpage'

const LoginPage: NextPage<any> = ({}) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <RegisterComponent />
    </>
  );
};


export default LoginPage;
