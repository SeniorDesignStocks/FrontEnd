import React from 'react';
import styled from 'styled-components';

import { pageWidth } from 'styles/dimensions';

const Outer = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  height: 65px;
`;

const Inner = styled.div`
  width: ${pageWidth};
  display: flex;
  justify-content: space-between;
`;

const Wrapper = (props) => (
  <Outer>
    <Inner {...props} />
  </Outer>
);

export default Wrapper;
