import React, { useEffect, useState, useRef } from 'react';
import RecordPageComponent from './recordpage';
import { RecordPageType } from './recordpageType';
import useStore_record from 'zus/record/record';
import useStore_user from 'zus/user/user';
import useStore_time from 'zus/time/time';
import useStore_modal from 'zus/modal/modal';
import useStore_test from 'zus/test/index';
import { useRouter } from 'next/router';
import axios from 'axios';
import moment from 'moment';

const RecordPage: React.FC<RecordPageType> = (props, {}: RecordPageType) => {
  const record = useStore_record();
  const user = useStore_user();
  const time = useStore_time();
  const modal = useStore_modal();
  const login = useStore_test();
  const router = useRouter();
  const [statis, set_statis] = useState<Boolean>(false);
  const [week_month, set_week_month] = useState<Boolean>(false);
  const [week, set_week] = useState();
  const [month, set_month] = useState([]);
  useEffect(() => {
    record.getRecord(user);
  }, [user.id]);

  useEffect(() => {
    if (statis) {
      axios
        .get(
          process.env.NEXT_PUBLIC_BASE_URL +
            '/api/board/get-avg/' +
            user.id +
            '/' +
            time.time.format('YYYY-MM-DD'),
          {
            headers: {
              Authorization: user.access_token,
            },
          },
        )
        .then((res) => {
          // console.log(res.data);
          // console.log(moment(res.data.week.st).format('HH:mm:ss'));
          // console.log('주간 데이터');
          set_week(res.data.week);
          set_month(res.data.month);
          // console.log(res.data.week.week + '주차');
          // console.log(moment(res.data.week.st, 'HH:mm').format('HH:mm 시작'));
          // console.log(moment(res.data.week.et, 'HH:mm').format('HH:mm 종료'));
          // console.log(parseInt(res.data.week.avg));
          // console.log(parseInt(res.data.week.sum));

          // console.log('월간 데이터');
          // console.log(moment(res.data.month.st, 'HH:mm').format('HH:mm 시작'));
          // console.log(moment(res.data.month.et, 'HH:mm').format('HH:mm 종료'));
          // console.log(parseInt(res.data.month.avg));
          // console.log(parseInt(res.data.month.sum));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [statis, time.time]);

  useEffect(() => {
    if (!login.login) {
      router.push('/');
      modal.set_modal_success();
      modal.set_modal_text('로그인이 필요한 기능입니다..');
      modal.set_modal();
    }
  }, []);

  return (
    <RecordPageComponent
      {...props}
      time={time}
      record={record}
      //   click_get_avg={click_get_avg}
      statis={statis}
      set_statis={set_statis}
      week_month={week_month}
      set_week_month={set_week_month}
      week={week}
      month={month}
    />
  );
};

export default RecordPage;
