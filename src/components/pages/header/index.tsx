import React, { useEffect, useState, useRef } from 'react';
import Organisms, { Header } from '../../../components/UI/molecules/index';
import axios from 'axios';
import useStore_record from 'zus/record/record';
import useStore_user from 'zus/user/user';

const HeaderComponent: React.FC<any> = ({}) => {
  const record = useStore_record();
  const user = useStore_user();

  return (
    <>
      <Header>
      </Header>
    </>
  );
};

export default HeaderComponent;
