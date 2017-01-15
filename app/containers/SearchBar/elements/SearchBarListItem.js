import styled from 'styled-components';
import { grey } from '../../../styles/colors';
import { font, textMedium } from '../../../styles/text';

const SearchResultStock = styled.li`
  font-family: ${font};
  font-size: ${textMedium};

  height: 40px;
  line-height: 40px;
  margin: 5px;
  padding: 0 5px;
  border-radius: 2px;

  &:hover {
    background-color: ${grey};
  }
`;

export default SearchResultStock;
