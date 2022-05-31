import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import EditComponent from 'page/editPage'

const LoginPage: NextPage<any> = ({}) => {
  return (
    <>
      <Head>
        <title>수정페이지</title>
      </Head>
      <EditComponent />
    </>
  );
};

// LoginPage.getInitialProps = () => {};

export default LoginPage;
