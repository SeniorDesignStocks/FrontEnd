import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import SVG from 'components/SVG';
import { white, red } from 'styles/colors';


const diameter = '40px';
const offset = '50px';
const Wrapper = styled(Link)`
  background-color: ${red};
  color: ${white};
  height: ${diameter};
  width: ${diameter};
  border-radius: 50%;

  position: absolute;
  top: ${offset};
  left: ${offset};

  text-align: center;
  line-height: ${diameter};
`;

const Close = (props) => (
  <Wrapper {...props}>
    <SVG type="cross" size="small" style={{ margin: '1px 1px 0 0' }} />
  </Wrapper>
);

export default Close;
