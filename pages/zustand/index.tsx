import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import useStore from 'zus/test/index';
import useStore_user from 'zus/user/user';
import useStore_record from 'zus/record/record';
import useStore_modal from 'zus/modal/modal';
import useStore_board from 'zus/modal/board';
import axios from 'axios';
import moment from 'moment';

const LoginPage: NextPage<any> = ({}) => {
  const bears = useStore();
  const user = useStore_user();
  const record = useStore_record();
  const modal = useStore_modal();
  const board = useStore_board();

  const set_modal = (e) => {
    e.preventDefault();
    modal.set_modal_board();
    modal.set_modal();
  };

  const get_record = (e) => {
    e.preventDefault();
    e.persist();
    axios
      .get(
        process.env.NEXT_PUBLIC_BASE_URL +
          '/api/board/get-avg/' +
          `smpts00` +
          '/' +
          moment().format('YYYY-MM-DD'),
        {
          headers: {
            Authorization: user.access_token,
          },
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res.data);
        // console.log(moment(res.data.week.st).format('HH:mm:ss'));
        console.log(moment(res.data.week.st, 'HH:mm').format('HH:mm 시작'));
        console.log(moment(res.data.week.et, 'HH:mm').format('HH:mm 종료'));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const set_zus = (e) => {
    e.preventDefault();
    e.persist();
    record.getRecord(user);
  };

  return (
    <>
      <Head>
        <title></title>
      </Head>
      <div>{bears.time.format('YYYY 년 MM 월 DD 일')}</div>
      <div>
        <button onClick={bears.increase_day}>날짜 증가</button>
      </div>
      <div>
        <button onClick={bears.decrease_day}>날짜 감소</button>
      </div>
      안녕하세요
      {bears.bears}
      <button onClick={set_zus}> 증가 </button>
      <button onClick={set_modal}> 모달키기 </button>
      <button onClick={get_record}> api테스트 </button>
    </>
  );
};

// LoginPage.getInitialProps = () => {};

export default LoginPage;
