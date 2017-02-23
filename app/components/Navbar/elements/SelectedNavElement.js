import styled from 'styled-components';

import NavElement from './NavElement';
import { lightBlue } from 'styles/colors';
import { listHighlight } from 'styles/mixins';

const SelectedNavElement = styled(NavElement)`
  ${listHighlight(lightBlue)}
`;

export default SelectedNavElement;
