import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, textSmall } from 'styles/text';
import { red, lightBlue } from 'styles/colors';

const Wrapper = styled.span`
  margin-left: auto;
  font-family: ${font};
  font-size: ${textSmall};

  width: 100px;
  text-align: right;
`;

const ValueSpan = styled.span`
  color: ${(props) => (props.up ? lightBlue : red)};
`;

const SearchResultStockRight = ({ value, prefix, up, ...props }) => (
  <Wrapper {...props}>{prefix}<ValueSpan up={up}>{value}</ValueSpan></Wrapper>
);

SearchResultStockRight.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  prefix: PropTypes.string,
  up: PropTypes.bool,
};

export default SearchResultStockRight;
