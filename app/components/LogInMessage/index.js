import styled from 'styled-components';
import React from 'react';
import { pageWidth } from 'styles/dimensions';
import { textMedium } from 'styles/text';

const Wrapper = styled.div`
  height: 100px;
  line-height: 100px;
  width: ${pageWidth};
  font-size: ${textMedium};
  text-align: center;
`;

const LogInMessage = ({ message = 'You need to log in inorder to use this feature' }) => (
  <Wrapper>
    {message}
  </Wrapper>
);

LogInMessage.propTypes = {
  message: React.PropTypes.string,
};

export default LogInMessage;
