import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import { Card } from '../../molecules';
import ComparePageStyle from './comparepageStyle';

const ComparePageComponent: React.FC<any> = (props) => {
  return (
    <>
      <ComparePageStyle>
        <div className="title_div">
          <div>
            <h1>비교 게시판</h1>
          </div>
        </div>
        <div className="content">
          <div className="content_left">
            <Card></Card>
          </div>
          <div className="content_mid"></div>
          <div className="content_right">
            <div className="content_right_div">
              <Card></Card>
              <br />
              <h2>20 분 차이</h2>
            </div>
          </div>
        </div>
      </ComparePageStyle>
    </>
  );
};

export default ComparePageComponent;
