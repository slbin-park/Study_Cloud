import React, { useEffect, useState, useRef } from 'react';
import CalendarComponent from './calendar';
import {CalendarType} from './calendarType'
import useStore from 'zus/time/time'
const Calendar: React.FC<CalendarType> = (props, {}: CalendarType) => {
    const time = useStore()
    return(
<CalendarComponent {...props} time={time}/>
)};

export default Calendar;