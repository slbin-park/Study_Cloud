import React, { useEffect, useState, useRef } from 'react';
import CalendarComponent from './calendar';
import {CalendarType} from './calendarType'

const Calendar: React.FC<CalendarType> = (props, {}: CalendarType) => (
<CalendarComponent {...props} />
);

export default Calendar;