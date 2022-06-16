import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import RegisterPageComponent from './registerpage';
import { RegisterPageType } from './registerpageType';
import useStore from 'zus/modal/modal';

const Button: React.FC<RegisterPageType> = (props, {}: RegisterPageType) => {
  const modal = useStore();

  const setRegister = (e) => {
    e.preventDefault();
    e.persist();

    const data = {
      id: e.target.id.value,
      password: e.target.password.value,
      password_check: e.target.password_check.value,
      name: e.target.name.value,
      school: e.target.school.value,
      major: e.target.major.value,
    };

    axios
      .post(
        'http://qkrtmfqls.gabia.io/api/user/register',
        {
          id: data.id,
          password: data.password,
          name: data.name,
          school: data.school,
          major: data.major,
        },
        {
          headers: {
            Authorization: 'token',
          },
        },
      )
      .then((res) => {
        if (res.data.success) {
          modal.set_modal_success();
        }
        modal.set_modal_text(
          res.data.success
            ? '회원가입에 성공하셨습니다.'
            : '회원가입에 실패하셨습니다.',
        );
      })
      .catch((err) => {
        modal.set_modal_text('회원가입에 실패하셨습니다.');
        console.log(err);
      })
      .then(() => {
        modal.set_modal();
      });
    // modal.set_modal_text('회원가입에 성공하셨습니다.')
    // modal.set_modal();
  };

  return (
    <>
      <RegisterPageComponent {...props} onSubmit={setRegister} />
    </>
  );
};

export default Button;
