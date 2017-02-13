import React from 'react';
import styled from 'styled-components';
import { textSmall, font } from '../../styles/text';

const Input = styled.input`
  outline: none;
  border: none;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  &:focus {
    box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
  }

  width: 300px;
  border-radius: 2px;
  height: 40px;

  font-family: ${font};
  font-size: ${textSmall};
`;

const TextInput = (field) => (
  <Input {...field.input} type="text" />
);

export default TextInput;
