import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import useStore from 'zus/test/index';
import useStore_user from 'zus/user/user'
import axios from 'axios';
import moment from 'moment';

const LoginPage: NextPage<any> = ({}) => {
    const bears = useStore();
    const user = useStore_user();

    const get_record = (e) =>{
      e.preventDefault();
      e.persist();
      axios.post("http://localhost:3001/api/record/get",{
            id : user.id,
        },{
            headers : {
                Authorization : user.access_token,
            },
        }).then((res)=>{
            let a = moment(res.data.response[0].end_time,'HH:mm:ss')
            let b = moment(res.data.response[0].start_time,'HH:mm:ss')
            console.log(a)
            console.log(b)
            console.log(moment.duration(a.diff(b)).asMinutes())

            // moment.duration(t2.diff(t1)).asHours());
        }).catch((err)=>{
            console.log(err)
        })
    }
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
      <button onClick={get_record}> 증가 </button>
    </>
  );
};

// LoginPage.getInitialProps = () => {};

export default LoginPage;
