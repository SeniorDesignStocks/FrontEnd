import styled from 'styled-components';

import { white, grey } from 'styles/colors';

const Wrapper = styled.li`
  background-color: ${white};
  border: 1px solid ${grey};
  border-radius: 2px;
  margin: 5px 0;

  display: flex;
  flex-direction: column;
`;

export default Wrapper;
