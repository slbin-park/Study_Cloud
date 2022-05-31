import React, { useEffect, useState, useRef } from 'react';
import {RecordPage} from '../../UI/pages/index';
import RecordPageLayout from './recordlayout'
const RecordComponent: React.FC<any> = ({}) => {
  return (
    <RecordPageLayout>
    <RecordPage/>
    </RecordPageLayout>
  );
};

export default RecordComponent;
