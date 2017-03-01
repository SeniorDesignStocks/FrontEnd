import React from 'react';
import styled from 'styled-components';
import { font, textMedium } from 'styles/text';

import SVG from 'components/SVG';

const SearchIcon = styled(SVG)`
  position: absolute;
  left: 10px;
  top: 1px;
  bottom: 0;
  line-height: 40px;
`;

const Wrapper = styled.div`
  height: 40px;
  min-height: 40px;
  position: relative;
`;

const Input = styled.input`
  height: 40px;
  min-height: 40px;
  padding: 0 10px 0 45px;

  transition: 0.25s ease;
  outline: none;

  font-family: ${font};
  font-size: ${textMedium};
  width: 100%;
`;

const SearchInput = (props) => (
  <Wrapper>
    <Input {...props} />
    <SearchIcon type="search" size="medium" />
  </Wrapper>
);

export default SearchInput;
