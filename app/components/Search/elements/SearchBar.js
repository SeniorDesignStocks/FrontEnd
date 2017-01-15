import styled from 'styled-components';
import { pageWidth } from '../../../styles/dimensions';

const SearchBar = styled.input`
  height: 40px;
  margin: 10px 10px 5px 10px;
  padding: 0 10px;
  flex: 1;
  max-width: ${pageWidth};

  background-color: #fff;
  border-radius: 2px;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  transition: 0.25s ease;
  outline: none;

  &:focus {
    box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
  }
`;

export default SearchBar;
