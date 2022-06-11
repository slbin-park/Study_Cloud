import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import NoticeComponent from 'page/noticePage/index';

const NoticePage: NextPage<any> = ({}) => {
  return (
    <>
      <Head>
        <title>로그인 페이지</title>
      </Head>
      <NoticeComponent />
    </>
  );
};

export default NoticePage;
