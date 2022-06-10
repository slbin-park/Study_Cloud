import React, { useEffect, useState, useRef } from 'react';
import ComparePageComponent from './comparepage';
import {ComparePageType} from './comparepageType'

const ComparePage: React.FC<ComparePageType> = (props, {}: ComparePageType) => (
<ComparePageComponent {...props} />
);

export default ComparePage