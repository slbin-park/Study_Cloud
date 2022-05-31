import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import {EditPage} from '../../UI/pages/index';
import EditPageLayout from './editlayout';

const HeaderComponent: React.FC<any> = ({}) => {
  return (
    <>
    <EditPageLayout>
      <EditPage>
      </EditPage>
    </EditPageLayout>
    </>
  );
};

export default HeaderComponent;
