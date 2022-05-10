import React, { useEffect, useState, useRef } from 'react';
import {LoginPage} from '../../UI/pages/index'
import LoginLayout from './loginpageStyle';
const RecordComponent: React.FC<any> = ({}) => {
  return (
    <>
    <LoginLayout>
      <LoginPage/>
    </LoginLayout>
    </>
  );
};

export default RecordComponent;
