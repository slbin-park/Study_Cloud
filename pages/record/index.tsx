import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import RecordComponent from '../../src/components/pages/recordPage'

const LoginPage: NextPage<any> = ({}) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <RecordComponent />
    </>
  );
};

// LoginPage.getInitialProps = () => {};

export default LoginPage;
