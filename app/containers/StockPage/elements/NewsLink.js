import styled from 'styled-components';
import { Link } from 'react-router';

import { textVerySmall } from 'styles/text';
import { lightBlue } from 'styles/colors';

const NewsLink = styled(Link)`
  color: ${lightBlue};
  font-size: ${textVerySmall};
  float: right;
`;

export default NewsLink;
