import React, { useEffect, useState, useRef } from 'react';
import ModalComponent from './modal';
import {ModalType} from './modalType'
import useStore from 'zus/modal/modal';
const Button: React.FC<ModalType> = (props, {}: ModalType) => {
    const modal = useStore();
    return(
    
<ModalComponent modal={modal.modal}{...props} />
)};

export default Button;