import React from 'react';
import styled, { keyframes } from 'styled-components';

import { red } from 'styles/colors';

// variables
const animationTime = 1;
const height = 14;
const width = 5;
const altBarOffset = 5;

// repeated sections
const maxHeight = `
  top: 0px;
  bottom: 0px;
`;

const pulse = keyframes`
  0% { ${maxHeight} }
  50% {
    top: ${(height / 2) - (width / 2)}px;
    bottom: ${(height / 2) - (width / 2)}px;
  }
  100% { ${maxHeight} }
`;

const Wrapper = styled.div`
  height: ${height}px;
  position: relative;
`;

const LoadingBar = styled.div`
  position: absolute;
  border-radius: 2px;
  width: ${width}px;
  background-color: ${red};

  animation: ${pulse} ${animationTime}s infinite;
  animation-timing-function: ease;
`;

const LoadingElement = () => (
  <Wrapper>
    <LoadingBar style={{ left: `${altBarOffset + width}px`, animationDelay: `${animationTime / 3}s` }} />
    <LoadingBar />
    <LoadingBar style={{ left: `-${altBarOffset + width}px`, animationDelay: `${animationTime * (2 / 3)}s` }} />
  </Wrapper>
);

export default LoadingElement;
