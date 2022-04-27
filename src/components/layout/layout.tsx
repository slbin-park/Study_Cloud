import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import { useRouter } from 'next/router';
import {Header} from '../UI/molecules/index'
import axios from 'axios';
const Layout: React.FC<any> = ({ children }) => {

  return (
      <>
      <Header/>
        <div style= {{paddingTop:'70px'}}>
            {children}
        </div>
    </>
  );
};

export default Layout;
