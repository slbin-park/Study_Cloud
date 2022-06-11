import React, { useEffect, useState, useRef } from 'react';
import { NoticePage } from '../../UI/pages/index';
import NoticePageLayout from './noticelayout';

const RecordComponent: React.FC<any> = ({}) => {
  return (
    <NoticePageLayout>
      <NoticePage />
    </NoticePageLayout>
  );
};

export default RecordComponent;
