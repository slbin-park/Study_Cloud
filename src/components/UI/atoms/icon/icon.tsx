import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import IconStyle from './iconStyle';

const IconComponent: React.FC<any> = (props) => {
return (
<>
<IconStyle>
    <FontAwesomeIcon style={{width:'100%',height:'100%'}} icon={faPlusCircle}/>
</IconStyle>
</>
);
};

export default IconComponent;