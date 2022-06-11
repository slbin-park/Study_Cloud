import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {
  faSearch,
  faBars,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import Board_Style from './style/boardStyle';
import moment from 'moment';

const Card_BoardComponent: React.FC<any> = (props) => {
  return (
    <Board_Style {...props}>
      <div className="title">
        <div>
          {props.data.name})&nbsp;
          {props.data != undefined ? props.data.title : '게시판입니다.'}
        </div>
        <div className="title_right">
          <div className="title_date">
            {moment(props.data.share_date).format('YYYY년MM월DD일 HH시mm분')}
          </div>
          {props.data != undefined
            ? props.cal(props.data.start_time, props.data.end_time)
            : '0'}
          분
        </div>
      </div>
      <div className="comment">
        {props.data != undefined ? props.data.memo : '내용입니다.'}
      </div>
      <div className="r_icon">
        <FontAwesomeIcon
          icon={faCommentDots}
          style={{ width: '30px', height: '30px', marginRight: '7px' }}
        />
        {props.data.cnt}
      </div>
    </Board_Style>
  );
};

export default Card_BoardComponent;
