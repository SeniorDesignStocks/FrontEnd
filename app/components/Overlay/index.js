import React, { Children, PropTypes } from 'react';

import Wrapper from './elements/Wrapper';
import Close from './elements/Close';

const Overlay = ({ children, oldPathName, ...props }) => (
  <Wrapper {...props}>
    <Close to={oldPathName} />
    {Children.toArray(children)}
  </Wrapper>
);

Overlay.propTypes = {
  children: PropTypes.node,
  oldPathName: PropTypes.string,
};

export default Overlay;
