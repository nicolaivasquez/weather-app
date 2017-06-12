import React from 'react';
import { shallow } from 'enzyme';
import { GraphWidget } from './GraphWidget';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <GraphWidget />
  );
});

describe('render', () => {
  it('should be a tile element', () => {
    expect(wrapper.is('.tile')).toBeTruthy();
  });
});
