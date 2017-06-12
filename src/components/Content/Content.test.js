import React from 'react';
import { shallow } from 'enzyme';
import { Content } from './Content';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <Content />
  );
});

describe('render', () => {
  it('should contain container element', () => {
    expect(wrapper.is('.container')).toBeTruthy();
  });
});
