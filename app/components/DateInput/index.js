import React from 'react';
import styled from 'styled-components';
import { textSmall, font } from 'styles/text';
import { lightGrey, grey } from 'styles/colors';
import { inputFocus } from 'styles/mixins';

const Wrapper = styled.input`
  outline: none;
  border: 1px solid ${grey};
  background-color: ${lightGrey};
  padding: 0 10px;
  margin: 0 5px;

  width: 200px;
  border-radius: 2px;
  height: 40px;

  font-family: ${font};
  font-size: ${textSmall};

  ${inputFocus}
`;

const DateInput = (field) => (
  <Wrapper {...field.input} type="date" />
);

export default DateInput;
