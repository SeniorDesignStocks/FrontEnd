import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import A from '../index';

describe('<A />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <A id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <A>{children}</A>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should convert the "to" param to an href tag', () => {
    const to = 'https://github.com';
    const renderedComponent = shallow(
      <A to={to} />
    );

    expect(renderedComponent.prop('href')).toEqual(to);
  });

  it('should map newTab boolean to proper target state', () => {
    const falseComponent = shallow(
      <A newTab={false} />
    );
    const trueComponent = shallow(
      <A newTab />
    );

    expect(falseComponent.prop('target')).toEqual('');
    expect(trueComponent.prop('target')).toEqual('_blank');
  });
});
