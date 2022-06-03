import React, { useEffect, useState, useRef } from 'react';
import ModalComponent from './modal';
import {ModalType} from './modalType'
import useStore from 'zus/modal/modal';

const Button: React.FC<ModalType> = (props, {}: ModalType) => {
    const modal = useStore();
    const modal_ref = useRef<any>()
    const modal_click = async ()=>{
        modal.set_modal();
        if(modal.modal_success === true){
            modal.set_modal_success();
        }
    }

    const modal_close = (e) => {

        if (modal_ref.current && !modal_ref.current.contains(e.target)) {
            e.preventDefault(); // 끄는경우에만 실행해야함
            //  https://stackoverflow.com/questions/25863192/onmousedown-event-stopping-input-focus
            // 참조 레퍼런스
            modal.set_modal();
        }
        else{
        }
      };
    return(
    
    <ModalComponent  modal ={modal} modal_click={modal_click} {...props} modal_ref={modal_ref} modal_close={modal_close} />

)};

export default Button;