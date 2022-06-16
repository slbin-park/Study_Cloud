import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import { LineText } from '../../molecules';
import NoticePageStyle from './noticepageStyle';

const NoticePageComponent: React.FC<any> = (props) => {
  return (
    <>
      <NoticePageStyle>
        <div className="title_div">
          <div>
            <h1>공지사항</h1>
          </div>
        </div>
        <div className="line_table">
          {Array(1)
            .fill(0)
            .map((i) => {
              return (
                <LineText
                  notice="공지사항"
                  date="2022.06.10"
                  detail="첫번째 공지사항입니다."
                  comment_num={5}
                />
              );
            })}
        </div>
      </NoticePageStyle>
    </>
  );
};

export default NoticePageComponent;
