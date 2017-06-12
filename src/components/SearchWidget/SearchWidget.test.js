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
  it('should contain select element', () => {
    expect(wrapper.find('VirtualizedSelect').exists()).toBeTruthy();
  });
});
