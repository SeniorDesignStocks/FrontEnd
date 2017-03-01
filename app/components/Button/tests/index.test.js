import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Button from '../index';
import ButtonLink from '../elements/ButtonLink';

describe('<Button />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <Button id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Button>{children}</Button>
    );

    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should have an "a" element if to provided', () => {
    const withTo = shallow(
      <Button to={'test'} />
    );
    const withoutTo = shallow(
      <Button />
    );

    expect(withTo.find(ButtonLink).length).toEqual(1);
    expect(withoutTo.find(ButtonLink).length).toEqual(0);
  });
});
