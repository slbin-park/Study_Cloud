import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import Link from 'next/link';

import StyledHeader from './headerStyle';
import Atoms, { Input } from '../../atoms/index';
import Molecules, { Board, IconText, NavBar } from '../../molecules/index';

const HeaderComponent: React.FC<any> = (props) => {
  const hamburger = props.hamburger;
  const set_hamburger = props.set_hamburger;

  return (
    <>
      <StyledHeader {...props}>
        <Link href="/">
          <div className="title_div">학습관리 페이지</div>
        </Link>
        <div className="Icon_div">
          {/* <Input placeholder='검색창' type='search'/> */}
          <FontAwesomeIcon
            icon={faSearch}
            style={{
              cursor: 'pointer',
              height: '40%',
              marginLeft: '10px',
              marginRight: '10px',
              color: 'white',
            }}
          />
          <FontAwesomeIcon
            onClick={() => set_hamburger(!hamburger)}
            icon={faBars}
            style={{ cursor: 'pointer', height: '40%', color: 'white' }}
          />
        </div>
        <NavBar
          {...props}
          hamburger={hamburger}
          set_hamburger={set_hamburger}
        />
      </StyledHeader>
      {/* <NavBar/> */}
    </>
  );
};

export default HeaderComponent;
