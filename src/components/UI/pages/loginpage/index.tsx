import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import LoginPageComponent from './loginpage';
import { LoginPageType } from './loginpageType';
import useStore from 'zus/user/user';
import useStore_login from 'zus/test/index';
import useStore_modal from 'zus/modal/modal';

const Button: React.FC<LoginPageType> = (props, {}: LoginPageType) => {
  const user = useStore();
  const login = useStore_login();
  const modal = useStore_modal();
  const Login = (e) => {
    e.preventDefault();
    e.persist();

    const data = {
      id: e.target.id.value,
      password: e.target.password.value,
    };

    axios
      .post(
        'http://localhost:3001/api/auth/login',
        {
          id: data.id,
          password: data.password,
        },
        {
          headers: {
            Authorization: 'token',
          },
        },
      )
      .then((res) => {
        console.log(modal.modal_success);

        if (res.data.success) {
          modal.set_modal_success();
          localStorage.setItem('token', res.data.refresh_token);
          user.set_user(res.data);
          login.success_login();
          modal.set_modal_text('로그인에 성공하셨습니다.');
          // localStorage.getItem('key');
        } else {
          modal.set_modal_text('로그인에 실패하셨습니다.');
        }
      })
      .catch((err) => {
        modal.set_modal_text('로그인에 실패하셨습니다.');
        console.log(err);
      })
      .then(() => {
        modal.set_modal();
      });
    // modal.set_modal_text('회원가입에 성공하셨습니다.')
    // modal.set_modal();
  };

  return <LoginPageComponent {...props} onSubmit={Login} />;
};

export default Button;
