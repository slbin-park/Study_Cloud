import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {
  faSearch,
  faBars,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import moment from 'moment';
import NotiLineStyle from './notilineStyle';

const NotiLineComponent: React.FC<any> = (props) => {
  return (
    <>
      <NotiLineStyle {...props}>
        <div>
          <div className="noti_title">
            <FontAwesomeIcon icon={faGraduationCap} className="noti_Icon" />
            {props.data.title}
            &nbsp;&nbsp;
            <div className="noti_title_date">
              {moment(props.data.created_at).format('YY.MM.DD HH:mm ')}
            </div>
          </div>

          <div className="noti_reply">{props.data.reply}</div>
          <div className="noti_id">작성자 : {props.data.replyid}</div>
        </div>
      </NotiLineStyle>
    </>
  );
};

export default NotiLineComponent;
