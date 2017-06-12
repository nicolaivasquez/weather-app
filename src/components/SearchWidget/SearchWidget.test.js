import React from 'react';
import { shallow } from 'enzyme';
import { SearchWidget } from './SearchWidget';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <SearchWidget />
  );
});

describe('render', () => {
  it('should contain input element', () => {
    expect(wrapper.find('input').exists()).toBeTruthy();
  });
});
