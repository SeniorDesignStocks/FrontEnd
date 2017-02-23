import styled from 'styled-components';

import { red } from 'styles/colors';
import { listHighlight } from 'styles/mixins';
import { textSmall, font } from 'styles/text';

const height = '50px';
const AccountElement = styled.div`
  margin: 10px 10px 0 10px;
  padding: 0 10px;
  height: ${height};
  line-height: ${height};

  ${listHighlight(red)}

  font-family: ${font};
  font-size: ${textSmall};
`;

export default AccountElement;
