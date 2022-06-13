import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import NotiBarComponent from './notibar';
import { NotiBarType } from './notibarType';
import useStore_user from 'zus/user/user';
import useStore_board from 'zus/modal/board';
import useStore_modal from 'zus/modal/modal';
import { useRouter } from 'next/router';

const NotiBar: React.FC<NotiBarType> = (props, {}: NotiBarType) => {
  const user = useStore_user();
  const board = useStore_board();
  const modal = useStore_modal();
  const router = useRouter();
  const Click_noti = (e, data) => {
    e.preventDefault();
    console.log('data');
    console.log(data);
    axios
      .post(
        'http://localhost:3001/api/board/get-one-board/' + data.noti_num,
        {},
      )
      .then((res) => {
        console.log(res.data.board);
        board.set_data(res.data.board);
        modal.set_modal();
        board.set_reply_data(data.noti_num);
        router.push('/board');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <NotiBarComponent {...props} Click_noti={Click_noti} />
    </>
  );
};

export default NotiBar;
