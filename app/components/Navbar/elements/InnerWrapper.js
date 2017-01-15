import styled from 'styled-components';
import { pageWidth } from '../../../styles/dimensions';

const InnerWrapper = styled.div`
  flex: 1;
  max-width: ${pageWidth};

  display: flex;
  justify-content: space-between;
`;

export default InnerWrapper;
