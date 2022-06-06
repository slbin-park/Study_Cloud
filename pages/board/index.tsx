import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import BoardComponent from 'page/boardPage'

const LoginPage: NextPage<any> = ({}) => {
  return (
    <>
      <Head>
        <title>게시글 페이지</title>
      </Head>
      <BoardComponent />
    </>
  );
};

// LoginPage.getInitialProps = () => {};

export default LoginPage;
