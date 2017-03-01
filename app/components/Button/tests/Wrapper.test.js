import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import { red, lightBlue } from 'styles/colors';

import Wrapper from '../elements/Wrapper';

describe('<Wrapper />', () => {
  it('should render with variable color', () => {
    const defaultColor = shallow(
      <Wrapper></Wrapper>
    );
    const lightBlueColor = shallow(
      <Wrapper color="lightBlue"></Wrapper>
    );

    expect(defaultColor).to.have.style('color', red);
    expect(lightBlueColor).to.have.style('color', lightBlue);
  });
});
