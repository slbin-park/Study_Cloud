import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import Link from 'next/link';
import Card_Regular from './component/card_regular';
import Card_Board from './component/card_board';

import CardStyle from './cardStyle';

const CardComponent: React.FC<any> = (props) => {
  return (
    <>
      {props.board === true ? (
        <Card_Board
          {...props}
          onClick={(e) => props.card_click(e, props.data)}
        />
      ) : (
        <Card_Regular
          {...props}
          onClick={(e) => props.card_click(e, props.data)}
        />
      )}
    </>
  );
};

export default CardComponent;
