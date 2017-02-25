import styled from 'styled-components';
import { Link } from 'react-router';

import { textMedium } from 'styles/text';
import { black, lightBlue } from 'styles/colors';

const StockName = styled(Link)`
  font-size: ${textMedium};
  color: ${black};
  text-decoration: none;

  &:hover {
    color: ${lightBlue};
  }
`;

export default StockName;
