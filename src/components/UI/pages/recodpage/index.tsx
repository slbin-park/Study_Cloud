import React, { useEffect, useState, useRef } from 'react';
import RecordPageComponent from './recordpage';
import {RecordPageType} from './recordpageType'

const Button: React.FC<RecordPageType> = (props, {}: RecordPageType) => (
<RecordPageComponent {...props} />
);

export default Button;