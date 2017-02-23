import styled from 'styled-components';

import { darkGrey, red } from 'styles/colors';
import { listHighlight } from 'styles/mixins';
import { textSmall, font } from 'styles/text';

const height = '50px';
const NavElement = styled.li`
  color: ${darkGrey};
  text-align: center;
  margin: 10px 10px 0 10px;
  padding: 0 10px;
  height: ${height};
  line-height: ${height};

  ${listHighlight(red, 'hover')}

  font-family: ${font};
  font-size: ${textSmall};
`;

export default NavElement;
