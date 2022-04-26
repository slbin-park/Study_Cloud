import React, { useEffect, useState, useRef } from 'react';
import MainPageComponent from './mainpage';
import {MainPageType} from './mainpageType'

const MainPage: React.FC<MainPageType> = (props, {}: MainPageType) => (
<MainPageComponent {...props} />
);

export default MainPage;