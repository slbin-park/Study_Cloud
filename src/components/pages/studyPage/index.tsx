import React, { useEffect, useState, useRef } from 'react';
import {StduyPage} from '../../UI/pages/index'
import StudyPageLayout from './studylayout'

const RecordComponent: React.FC<any> = ({}) => {
  return (
    <StudyPageLayout>
    <StduyPage/>
    </StudyPageLayout>
  );
};

export default RecordComponent;
