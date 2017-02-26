import styled from 'styled-components';

import { grey, white } from 'styles/colors';
import { pageWidth } from 'styles/dimensions';

const Panel = styled.section`
  background-color: ${white};
  border: 1px solid ${grey};
  border-radius: 2px;
  width: ${pageWidth};
  margin: 5px 0 0 0;
  display: table;
`;

export default Panel;
