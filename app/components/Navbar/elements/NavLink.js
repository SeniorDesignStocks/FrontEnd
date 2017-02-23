import styled from 'styled-components';
import { Link } from 'react-router';

import { darkGrey, red } from 'styles/colors';
import { listHighlight } from 'styles/mixins';
import { textSmall, font } from 'styles/text';

const height = '50px';
const NavLink = styled(Link)`
  color: ${darkGrey};
  text-align: center;
  margin: 10px 10px 0 10px;
  padding: 0 10px;
  height: ${height};
  line-height: ${height};

  ${listHighlight(red, 'hover')}

  font-family: ${font};
  font-size: ${textSmall};
  text-decoration: none;
`;

export default NavLink;
