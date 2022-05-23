import React, { useEffect, useState, useRef } from 'react';
import RecordPageComponent from './recordpage';
import {RecordPageType} from './recordpageType';
import useStore_record from 'zus/record/record';
import useStore_user from 'zus/user/user';

const RecordPage: React.FC<RecordPageType> = (props, {}: RecordPageType) => {
    const record = useStore_record();
    const user = useStore_user();
    useEffect(()=>{
        record.getRecord(user);
        console.log(record)
    },[user.id])
    return (
    <RecordPageComponent {...props} record={record}/>
)};

export default RecordPage;