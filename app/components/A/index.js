import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { lightBlue } from 'styles/colors';

const Wrapper = styled.a`
  color: ${lightBlue};
`;

const A = ({ to, newTab = true, ...others }) => (
  <Wrapper href={to} target={newTab ? '_blank' : ''} {...others} />
);

A.propTypes = {
  to: PropTypes.string,
  newTab: PropTypes.bool,
};

export default A;
