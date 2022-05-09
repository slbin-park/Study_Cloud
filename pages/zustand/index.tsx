import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import useStore from 'zus/test/index';

const LoginPage: NextPage<any> = ({}) => {
    const bears = useStore()

    return (
    <>
      <Head>
        <title></title>
      </Head>
      <div>
        {bears.time.format('YYYY 년 MM 월 DD 일')}
      </div>
      <div>
        <button onClick={bears.increase_day}>날짜 증가</button>
      </div>
      <div>
        <button onClick={bears.decrease_day}>날짜 감소</button>
      </div>
      안녕하세요
      {bears.bears}
      <button onClick={bears.increasePopulation}> 증가 </button>
    </>
  );
};

// LoginPage.getInitialProps = () => {};

export default LoginPage;
