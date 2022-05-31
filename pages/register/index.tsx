import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import RegisterComponent from 'page/registerpage'

const LoginPage: NextPage<any> = ({}) => {
  return (
    <>
      <Head>
        <title>회원가입 페이지 </title>
      </Head>
      <RegisterComponent />
    </>
  );
};


export default LoginPage;
