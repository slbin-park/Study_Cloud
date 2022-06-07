import React, { useEffect, useState, useRef } from 'react';
import CardComponent from './card';
import {CardType} from './cardType';
import moment from 'moment';
import useStore from 'zus/record/edit';
import useStore_modal from 'zus/modal/modal';
import useStore_board from 'zus/modal/board';
import {useRouter} from 'next/router';

const Card: React.FC<CardType> = (props, {}: CardType) => {
    const edit = useStore()
    const router = useRouter();
    const modal = useStore_modal();
    const board = useStore_board();
    
    const cal = (a ,b) =>{
        a = moment(a,'HH:mm:ss')
        b = moment(b,'HH:mm:ss')
        return moment.duration(b.diff(a)).asMinutes()
    }
    const card_click = (e,data)=>{
        e.preventDefault();
        if(router.pathname == '/board'){
            board.set_data(data)
            modal.set_modal();
            board.set_reply_data(data.board_num)
        }
        else{
            edit.set_data(data)
            edit.edit_start_d(parseInt(moment(data.start_time,'HH:mm:ss').format('HH')) >11 ? '오후' : '오전')
            if (parseInt(moment(data.start_time,'HH:mm:ss').format('HH')) >11){
                edit.edit_start_t(parseInt(moment(data.start_time,'HH:mm:ss').format('HH'))-12)
            }
            else{
                edit.edit_start_t(parseInt(moment(data.start_time,'HH:mm:ss').format('HH')))
            }
            edit.edit_start_m(parseInt(moment(data.start_time,'HH:mm:ss').format('mm')))
            
            if (parseInt(moment(data.end_time,'HH:mm:ss').format('HH')) >11){
                edit.edit_end_t(parseInt(moment(data.end_time,'HH:mm:ss').format('HH'))-12)
            }
            else{
                edit.edit_end_t(parseInt(moment(data.end_time,'HH:mm:ss').format('HH')))
            }
            edit.edit_end_d(parseInt(moment(data.end_time,'HH:mm:ss').format('HH')) >11 ? '오후' : '오전')
            
            edit.edit_end_m(parseInt(moment(data.end_time,'HH:mm:ss').format('mm')))
            router.push('/edit')
        }
    }
    

    return(
    <CardComponent {...props} cal={cal} card_click={card_click} />
)};

export default Card;