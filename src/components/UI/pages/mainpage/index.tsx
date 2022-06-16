import React, { useEffect, useState, useRef } from 'react';
import MainPageComponent from './mainpage';
import { MainPageType } from './mainpageType';
import useStore from 'zus/time/time';
import useStore_user from 'zus/user/user';
import useStore_login from 'zus/test/index';
import useStore_record from 'zus/record/record';
import axios from 'axios';

const MainPage: React.FC<MainPageType> = (props, {}: MainPageType) => {
  const time = useStore();
  const user = useStore_user();
  const login = useStore_login();
  const record = useStore_record();
  const [timer, set_timer] = useState<boolean>(false);
  const [noti_data, set_noti_data] = useState([]);
  useEffect(() => {
    if (user.id !== '') {
      axios
        .post(
          'https://qkrtmfqls.gabia.io/api/board/get_noti',
          {
            id: user.id,
          },
          {
            headers: {
              Authorization: user.access_token,
            },
          },
        )
        .then((res) => {
          set_noti_data(res.data.reply);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user.id]);

  return (
    <MainPageComponent
      {...props}
      time={time}
      user={user}
      login={login}
      record={record}
      timer={timer}
      set_timer={set_timer}
      noti_data={noti_data}
    />
  );
};

export default MainPage;
