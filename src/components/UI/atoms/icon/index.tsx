import React, { useEffect, useState, useRef } from 'react';
import IconComponent from './icon';
import {IconType} from './iconType'

const Icon: React.FC<IconType> = (props, {}: IconType) => (
<IconComponent {...props} />
);

export default Icon;