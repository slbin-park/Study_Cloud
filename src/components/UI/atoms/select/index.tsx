import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import SelectComponent from './select_component';

export interface SelectParamsType {
  item: string[];
  placeholder: string;
  name?: string;
  isFail?: boolean;
  required?: boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
  dvalue?:string;
}

const Select: React.FC<SelectParamsType> = (
  props,
  {
    item,
    placeholder,
    isFail,
    name,
    required,
    isSuccess,
    isWarning,
    dvalue,
  }: SelectParamsType,
) => {
  return (
    <>
      <SelectComponent {...props} />
    </>
  );
};

export default Select;
