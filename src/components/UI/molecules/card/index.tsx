import React, { useEffect, useState, useRef } from 'react';
import CardComponent from './card';
import {CardType} from './cardType';
import moment from 'moment';
import useStore from 'zus/record/edit'

const Card: React.FC<CardType> = (props, {}: CardType) => {
    const edit = useStore()
    const cal = (a ,b) =>{
        a = moment(a,'HH:mm:ss')
        b = moment(b,'HH:mm:ss')
        return moment.duration(b.diff(a)).asMinutes()
    }
    const card_click = (e,data)=>{
        e.preventDefault();
        console.log(data)
        edit.set_data(data)
        edit.edit_start_d(parseInt(moment(data.start_time,'HH:mm:ss').format('HH')) >11 ? '오후' : '오전')
        if (parseInt(moment(data.start_time,'HH:mm:ss').format('HH')) >11){
            edit.edit_start_t(parseInt(moment(data.start_time,'HH:mm:ss').format('HH'))-12)
        }
        else{
            edit.edit_start_t(parseInt(moment(data.start_time,'HH:mm:ss').format('HH'))-12)
        }
        edit.edit_start_m(parseInt(moment(data.start_time,'HH:mm:ss').format('mm')))

        if (parseInt(moment(data.end_time,'HH:mm:ss').format('HH')) >11){
            edit.edit_end_t(parseInt(moment(data.end_time,'HH:mm:ss').format('HH'))-12)
        }
        else{
            edit.edit_end_t(parseInt(moment(data.end_time,'HH:mm:ss').format('HH'))-12)
        }
        edit.edit_end_d(parseInt(moment(data.end_time,'HH:mm:ss').format('HH')) >11 ? '오후' : '오전')
        
        edit.edit_end_m(parseInt(moment(data.end_time,'HH:mm:ss').format('mm')))
        console.log()
    }
    

    return(
<CardComponent {...props} cal={cal} card_click={card_click}/>
)};

export default Card;