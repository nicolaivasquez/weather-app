import React from 'react';
import { shallow } from 'enzyme';
import { ForecastWidget } from './ForecastWidget';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <ForecastWidget />
  );
});

describe('render', () => {
  it('should be a tile element', () => {
    expect(wrapper.is('.tile')).toBeTruthy();
  });

  it('should display 5 forecast rows', () => {
    const expected = 5;

    expect(wrapper.find('ForecastRow').length).toEqual(expected);
  });
});
