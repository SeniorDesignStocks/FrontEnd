import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { red, lightBlue, white } from 'styles/colors';
import { textMedium, font } from 'styles/text';
import { inputFocus } from 'styles/mixins';

const DefaultWrapper = styled.button`
  color: ${white};
  background-color: ${red};
  border-radius: 2px;

  font-family: ${font};
  font-size: ${textMedium};
  outline: none;
  height: 40px;
  width: 300px;
  margin-bottom: 20px;
  position: relative;

  ${inputFocus}
`;

const createColor = (color) => {
  switch (color) {
    case 'lightBlue':
      return { backgroundColor: lightBlue };

    default:
      return {};
  }
};

const Wrapper = ({ color, ...props }) => (
  <DefaultWrapper style={createColor(color)} {...props} />
);

Wrapper.propTypes = {
  color: PropTypes.string,
};

export default Wrapper;
