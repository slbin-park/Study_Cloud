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
            school : e.target.school.value,
            major : e.target.major.value,
          };
        console.log(data)
    }

    return(
        <>
            <RegisterPageComponent {...props} onSubmit={setRegister} />
        </>
    )
};

export default Button;