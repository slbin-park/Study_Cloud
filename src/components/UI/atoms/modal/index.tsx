import React, { useEffect, useState, useRef } from 'react';
import ModalComponent from './modal';
import { ModalType } from './modalType';
import useStore from 'zus/modal/modal';
import useStore_user from 'zus/user/user';
import useStore_board from 'zus/modal/board';

import { useRouter } from 'next/router';
import moment from 'moment';
import axios from 'axios';

const Button: React.FC<ModalType> = (props, {}: ModalType) => {
  const modal = useStore();
  const router = useRouter();
  const board = useStore_board();
  const user = useStore_user();
  const [reply, set_reply] = useState('');

  const modal_ref = useRef<any>();

  const modal_click = async () => {
    modal.set_modal();
    if (modal.modal_success === true) {
      modal.set_modal_close();
      router.push('/');
    }
  };

  const modal_close = (e) => {
    if (
      router.pathname == '/board' &&
      modal_ref.current &&
      !modal_ref.current.contains(e.target)
    ) {
      e.preventDefault(); // 끄는경우에만 실행해야함
      //  https://stackoverflow.com/questions/25863192/onmousedown-event-stopping-input-focus
      // 참조 레퍼런스
      modal.set_modal();
    } else {
    }
  };

  const modal_reply = (e) => {
    const data = {
      board_num: board.data.board_num,
      id: user.id,
      reply,
      date: moment().format('YYYY-MM-DD HH:mm'),
    };
    axios
      .post(
        'http://localhost:3001/api/board/save_reply',
        {
          data,
        },
        {
          headers: {
            Authorization: user.access_token,
          },
        },
      )
      .then((res) => {
        board.set_reply_data(data.board_num);
        set_reply('');
        // moment.duration(t2.diff(t1)).asHours());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (modal.modal == true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modal.modal]);
  return (
    <ModalComponent
      modal={modal}
      modal_click={modal_click}
      {...props}
      modal_ref={modal_ref}
      modal_close={modal_close}
      test={router.pathname == '/board'}
      board={board.data}
      modal_reply={modal_reply}
      reply={reply}
      set_reply={set_reply}
      reply_data={board.reply}
    />
  );
};

export default Button;
