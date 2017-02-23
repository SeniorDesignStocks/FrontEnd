import styled from 'styled-components';
import { font, textMedium } from 'styles/text';

const SearchInput = styled.input`
  height: 40px;
  min-height: 40px;
  padding: 0 10px;

  transition: 0.25s ease;
  outline: none;

  font-family: ${font};
  font-size: ${textMedium};
`;

export default SearchInput;
