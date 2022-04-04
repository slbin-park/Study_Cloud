import styled, { css } from 'styled-components';

import { SelectParamsType } from '.';

const StyledSelect = styled.select.attrs((props) => ({
  defaultValue: 'none',
  name: props.name || '',
  disabled: props.disabled,
  required: props.required || false,
}))<SelectParamsType>`
  ${(props) => {


    return css`
      width: 100%;
      height: 45px;
      font-size: 16px;
      font-weight: 400;
      outline: none;
      will-change: border;
      text-indent: 6px;

      border-radius: 0px;

      &:focus {
      }

      &:disabled {
        border: 1px solid rgb(30, 30, 30, 50%);
        background-color: rgb(30, 30, 30, 5%);
      }
    `;
  }};
`;

export default StyledSelect;
