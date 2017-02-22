import styled from 'styled-components';
import { grey } from 'styles/colors';

const TitleBar = styled.div`
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  margin: 0 0 10px 0;
  border-bottom: 1px solid ${grey};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default TitleBar;
