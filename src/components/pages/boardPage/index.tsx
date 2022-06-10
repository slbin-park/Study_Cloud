import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { BoardPage } from '../../UI/pages/index';
import BoardPageLayout from './boardlayout';

const HeaderComponent: React.FC<any> = ({}) => {
  return (
    <>
      <BoardPageLayout>
        <BoardPage></BoardPage>
      </BoardPageLayout>
    </>
  );
};

export default HeaderComponent;
