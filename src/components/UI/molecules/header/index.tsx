import React, { useEffect, useState, useRef } from 'react';
import HeaderComponent from './header';

import {HeaderType} from './headerType'
import axios from 'axios';
import useStore from 'zus/user/user';
import useStore_login from 'zus/test/index'
import useStore_record from 'zus/record/record';

const Header: React.FC<HeaderType> = (props, {}: HeaderType) => {
  
  const [hamburger,set_hamburger] = useState<boolean>(false);
  const user = useStore();
  const login = useStore_login();
  const record = useStore_record();

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if (token){
      axios.post("http://localhost:3001/api/auth/check-refresh",{
        check : false,
        },{
            headers : {
                Authorization : token,
            },
        }).then((res)=>{
          login.success_login();
          user.set_user(res.data)
        }).catch((err)=>{
            console.log(err)
        })
      }
    },[]);

    useEffect(()=>{
      record.getRecord(user);
      console.log(record)
    },[user.id])

  return(
    <>
      <HeaderComponent hamburger={hamburger} set_hamburger = {set_hamburger} {...props} />
    </>
  )
};

export default Header;
