import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import RegisterPageComponent from './registerpage';
import {RegisterPageType} from './registerpageType'

const Button: React.FC<RegisterPageType> = (props, {}: RegisterPageType) => {

    const setRegister = (e) =>{
        e.preventDefault();
        e.persist();


        const data = {
            id : e.target.id.value,
            password : e.target.password.value,
            password_check : e.target.password_check.value,
            name : e.target.name.value,
            school : e.target.school.value,
            major : e.target.major.value,
          };
        
        
        axios.post("http://localhost:3001/api/register",{
            id : data.id,
            password : data.password,
            name : data.name,
            school : data.school,
            major : data.major
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

    }

    return(
        <>
            <RegisterPageComponent {...props} onSubmit={setRegister} />
        </>
    )
};

export default Button;