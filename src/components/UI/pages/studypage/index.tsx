import React, { useEffect, useState, useRef } from 'react';
import StudyPageComponent from './studypage';
import {StudyPageType} from './studypageType'

const Button: React.FC<StudyPageType> = (props, {}: StudyPageType) => (
<StudyPageComponent {...props} />
);

export default Button;