import React, { useEffect, useState, useRef } from 'react';
import RecordPageComponent from './recordpage';
import {RecordPageType} from './recordpageType';
import useStore_record from 'zus/record/record';
import useStore_user from 'zus/user/user';
import useStore_time from 'zus/time/time';
import useStore_modal from 'zus/modal/modal';
import useStore_test from 'zus/test/index';
import { useRouter } from 'next/router';

const RecordPage: React.FC<RecordPageType> = (props, {}: RecordPageType) => {
    const record = useStore_record();
    const user = useStore_user();
    const time = useStore_time();
    const modal = useStore_modal();
    const login = useStore_test();
    const router = useRouter();


    useEffect(()=>{
        record.getRecord(user);
    },[user.id])
    useEffect(()=>{
        if(!login.login){
            router.push('/')
            modal.set_modal_success()
            modal.set_modal_text('로그인이 필요한 기능입니다..')
            modal.set_modal();
        }
    },[])

    return (
    <RecordPageComponent {...props} time={time} record={record}/>
)};

export default RecordPage;