import React from 'react';
import {Mainpage} from '../src/components/UI/pages/index'
import Head from 'next/head';



export default function Home() {
  return (
    <div >
      <Head>
        <title>메인 페이지</title>
      </Head>
      <Mainpage/>
    </div>
  );
}
