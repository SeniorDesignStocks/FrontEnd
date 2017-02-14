import React from 'react';
import styled from 'styled-components';

import SVG from '../../SVG';

import { red, lightBlue } from '../../../styles/colors';
import { textMedium } from '../../../styles/text';

const Wrapper = styled.div`
  font-size: ${textMedium};
  display: flex;
  flex-direction: row;
`;

const StockValue = ({ value, up }) => (
  <Wrapper style={{ color: up === true ? lightBlue : red }}>
    <SVG style={{ margin: '0 5px 3px 0' }} type={up === true ? 'arrow-up' : 'arrow-down'} size="small" />{value}
  </Wrapper>
);

StockValue.propTypes = {
  value: React.PropTypes.number,
  up: React.PropTypes.bool,
};

export default StockValue;
