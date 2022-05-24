import React, { useEffect, useState, useRef } from 'react';
import MainPageComponent from './mainpage';
import {MainPageType} from './mainpageType'
import  useStore from 'zus/time/time';
import useStore_user from 'zus/user/user'
import useStore_login from 'zus/test/index'
import useStore_record from 'zus/record/record'

const MainPage: React.FC<MainPageType> = (props, {}: MainPageType) => {
    const time = useStore();
    const user = useStore_user();
    const login = useStore_login();
    const record = useStore_record();
    const [timer,set_timer] = useState<boolean>(false);
return(
<MainPageComponent {...props} time={time} user={user} login={login} record={record} timer={timer} set_timer={set_timer} />
)};

export default MainPage;