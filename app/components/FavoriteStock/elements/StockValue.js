import React from 'react';
import styled from 'styled-components';

import SVG from 'components/SVG';

import { red, lightBlue } from 'styles/colors';
import { textMedium } from 'styles/text';

const Wrapper = styled.div`
  font-size: ${textMedium};
  display: flex;
  flex-direction: row;
  margin-left: 5px;
`;

const roundValue = (val) => Math.round(val * 100) / 100;

const StockValue = ({ value, up, percentage }) => (
  <Wrapper style={{ color: up === true ? lightBlue : red }}>
    <SVG style={{ margin: '0 5px 3px 0' }} type={up === true ? 'arrow-up' : 'arrow-down'} size="small" />
    {roundValue(value)}
    {percentage ? '%' : ''}
  </Wrapper>
);

StockValue.propTypes = {
  value: React.PropTypes.number,
  up: React.PropTypes.bool,
  percentage: React.PropTypes.bool,
};

export default StockValue;
