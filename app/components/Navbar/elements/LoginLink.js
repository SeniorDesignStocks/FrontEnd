import styled from 'styled-components';

import NavLink from './NavLink';
import { red } from 'styles/colors';
import { listHighlight } from 'styles/mixins';

const LoginLink = styled(NavLink)`
  ${listHighlight(red)}
`;

export default LoginLink;
