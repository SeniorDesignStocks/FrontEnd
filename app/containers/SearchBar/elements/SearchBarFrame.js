import styled from 'styled-components';

const SearchBarFrame = styled.div`
  flex: 1;
  max-width: 550px;
  background-color: #fff;
  position: relative;
  z-index: 2;


  margin: 10px 0 5px 10px;
  padding: 5px;

  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  &:hover {
    box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
  }

  border-radius: 2px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 0.25s ease;
`;

export default SearchBarFrame;
