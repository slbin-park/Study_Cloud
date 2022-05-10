import React, { useEffect, useState, useRef } from 'react';
import {RegisterPage} from '../../UI/pages/index'
import RegisterPageLayout from './registerpageStyle'
const RegisterComponent: React.FC<any> = ({}) => {
  return (
    <>
    <RegisterPageLayout>
    <RegisterPage/>
    </RegisterPageLayout>
    </>
  );
};

export default RegisterComponent;
