import React, { useEffect, useState, useRef } from 'react';
import RecordPageComponent from './recordpage';
import {RecordPageType} from './recordpageType';
import useStore_record from 'zus/record/record';
import useStore_user from 'zus/user/user';
import useStore_time from 'zus/time/time';

const RecordPage: React.FC<RecordPageType> = (props, {}: RecordPageType) => {
    const record = useStore_record();
    const user = useStore_user();
    const time = useStore_time();
    useEffect(()=>{
        record.getRecord(user);
    },[user.id])

    return (
    <RecordPageComponent {...props} time={time} record={record}/>
)};

export default RecordPage;