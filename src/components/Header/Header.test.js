import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <Header />
  );
});

describe('render', () => {
  it('should contain nav element', () => {
    expect(wrapper.find('nav')).toBeDefined();
  });
});
