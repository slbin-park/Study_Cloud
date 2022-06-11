import React, { useEffect, useState, useRef } from 'react';
import NoticePageComponent from './noticepage';
import { NoticePageType } from './noticepageType';

const NoticePage: React.FC<NoticePageType> = (props, {}: NoticePageType) => (
  <NoticePageComponent {...props} />
);

export default NoticePage;
