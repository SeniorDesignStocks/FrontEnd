import A from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<FavoriteStock />', () => {
  it('renders a <button>', () => {
    const renderedComponent = shallow(
      <A />
    );
    expect(
      renderedComponent.find('a').node
    ).toBeDefined();
  });
});
