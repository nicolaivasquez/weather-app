import React from 'react';
import { shallow } from 'enzyme';
import { TodayWidget } from './TodayWidget';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <TodayWidget />
  );
});

describe('render', () => {
  it('should have primary class', () => {
    expect(wrapper.is('.is-primary')).toBeTruthy();
  });
});
