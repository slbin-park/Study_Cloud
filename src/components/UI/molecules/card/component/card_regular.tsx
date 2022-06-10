import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

const Card_BoardComponent: React.FC<any> = (props) => {
  return (
    <>
      <div className="title">
        <div>
          {props.data != undefined ? props.data.title : '카드 기본입니다.'}
        </div>
        <div>
          {props.data != undefined
            ? props.cal(props.data.start_time, props.data.end_time)
            : '0'}
          분
        </div>
      </div>
      <div className="comment">
        {props.data != undefined ? props.data.memo : '내용입니다.'}
      </div>
    </>
  );
};

export default Card_BoardComponent;
