import styled from 'styled-components';

import H2 from 'components/H2';
import { grey } from 'styles/colors';

const SectionTitle = styled(H2)`
  line-height: 60px;
  height: 60px;
  border-top: 1px solid ${grey};
  border-bottom: 1px solid ${grey};
  padding: 0 20px;
  margin: 20px 20px 0 20px;
  text-transform: uppercase;
`;

export default SectionTitle;
