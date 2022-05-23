import React, { useEffect, useState, useRef } from 'react';
import CardComponent from './card';
import {CardType} from './cardType';
import moment from 'moment';

const Card: React.FC<CardType> = (props, {}: CardType) => {
    const cal = (a ,b) =>{
        a = moment(a,'HH:mm:ss')
        b = moment(b,'HH:mm:ss')
        return moment.duration(b.diff(a)).asMinutes()
    }
    return(
<CardComponent {...props} data={props.data} cal={cal}/>
)};

export default Card;