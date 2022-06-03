import React, { useEffect, useState, useRef } from 'react';
import ModalComponent from './modal';
import {ModalType} from './modalType'
import useStore from 'zus/modal/modal';

const Button: React.FC<ModalType> = (props, {}: ModalType) => {
    const modal = useStore();
    const modal_click = async ()=>{
        modal.set_modal();
        if(modal.modal_success === true){
            modal.set_modal_success();
        }
    }
    
    return(
    
    <ModalComponent  modal ={modal} modal_click={modal_click} {...props}/>

)};

export default Button;