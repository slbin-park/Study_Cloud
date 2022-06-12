import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faPlusCircle, faBell } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import IconStyle from './iconStyle';
const i_name = {
  plus: faPlusCircle,
  bell: faBell,
};
const IconComponent: React.FC<any> = (props) => {
  return (
    <>
      <IconStyle>
        <FontAwesomeIcon
          style={{ width: '100%', height: '100%' }}
          icon={i_name[props.icon_name]}
        />
      </IconStyle>
    </>
  );
};

export default IconComponent;
