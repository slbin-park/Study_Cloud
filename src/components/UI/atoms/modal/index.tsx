import React, { useEffect, useState, useRef } from 'react';
import ModalComponent from './modal';
import {ModalType} from './modalType'

const Button: React.FC<ModalType> = (props, {}: ModalType) => (
<ModalComponent {...props} />
);

export default Button;