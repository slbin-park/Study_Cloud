import React, { useEffect, useState, useRef } from 'react';
import NotiLineComponent from './notiline';
import { NotiLineType } from './notilineType';

const NotiLine: React.FC<NotiLineType> = (props, {}: NotiLineType) => (
  <NotiLineComponent {...props} />
);

export default NotiLine;
