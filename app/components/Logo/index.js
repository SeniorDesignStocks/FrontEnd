import React from 'react';

import Circle from './elements/Circle';
import Wrapper from './elements/Wrapper';
import Phrase from './elements/Phrase';
import SubText from './elements/SubText';
import Red from './elements/Red';
import H2 from './elements/H2';

const Logo = () => (
  <Wrapper>
    <Circle>
      Ss
    </Circle>
    <Phrase>
      <H2><Red>S</Red>tocks <Red>S</Red>implified</H2>
      <SubText>Predictions made dead simple</SubText>
    </Phrase>
  </Wrapper>
);

export default Logo;
