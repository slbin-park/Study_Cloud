import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import CalendarStyle from './calendarStyle';

const CalendarComponent: React.FC<any> = (props) => {
    const [getMoment, setMoment] = useState(moment());
    const today = getMoment;
    
return (
    <>
    <CalendarStyle>
        <div className="calendar">
            <div className="calendar_head">
                <button className='calendar_button' onClick={() => { setMoment(getMoment.clone().subtract(1, 'month')) }} >이전달</button>
                <div className='calendar_head_text'>{today.format('YYYY 년 MM 월')}</div>
                <button className='calendar_button' onClick={() => { setMoment(getMoment.clone().add(1, 'month')) }} >다음달</button>
            </div>
            <div className='calendar_body'>
                <div className='calendar_body_box'>
                    <Day_kor />
                    <Calendar getMoment={getMoment} setMoment={setMoment}/>
                </div>
            </div>
        </div>
        </CalendarStyle>
    </>
);
};

const Calendar = ({getMoment,setMoment}) => {
    const today = getMoment;
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    let Result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
        Result = Result.concat(
            <div className='calendar_body_line' key={week}>
                {
                    Array(7).fill(0).map((data, index) => {
                        let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성

                        if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                            return (
                                <div className='calendar_body_days'  key={index} >
                                    <span style={{ color: 'red' }}>{days.format('D')}</span>
                                </div>
                            );
                        } else if (days.format('MM') !== today.format('MM')) {
                            return (
                                <div className='calendar_body_days' onClick={() => console.log(days.format('YYYYMMDD'))} key={index} >
                                    <span style={{ color: 'gray' }}>{days.format('D')}</span>
                                </div>
                            );
                        } else {
                            return (
                                <div className='calendar_body_days' key={index} >
                                    <span>{days.format('D')}</span>
                                </div>
                            );
                        }
                    })
                }
            </div>
        );
    }
    return Result;
}


function Day_kor() {
    return (
        <>
            <div className='calendar_body_head'>
                <div style={{ color: 'red' }} className='calendar_body_head_days'>
                    일
                </div>
                <div className='calendar_body_head_days'>
                    월
                </div>
                <div className='calendar_body_head_days'>
                    화
                </div>  
                <div className='calendar_body_head_days'>
                    수
        </div>
                <div className='calendar_body_head_days'>
                    목
        </div>
                <div className='calendar_body_head_days'>
                    금
        </div>
                <div className='calendar_body_head_days'>
                    토
        </div>
            </div>
        </>
    )
}

export default CalendarComponent;