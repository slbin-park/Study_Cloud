import React, { useEffect, useState, useRef } from 'react';
import CardComponent from './card';
import {CardType} from './cardType'

const Card: React.FC<CardType> = (props, {}: CardType) => (
<CardComponent {...props} />
);

export default Card;