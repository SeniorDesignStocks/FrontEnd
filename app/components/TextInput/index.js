import React from 'react';
import styled from 'styled-components';
import { textSmall, font } from '../../styles/text';
import { lightGrey, grey, red } from '../../styles/colors';

const Input = styled.input`
  outline: none;
  border: 1px solid ${grey};
  background-color: ${lightGrey};
  padding: 0 10px;
  &:focus {
    border-color: ${red};
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
