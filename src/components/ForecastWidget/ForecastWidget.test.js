import React from 'react';
import { shallow } from 'enzyme';
import { ForecastWidget } from './ForecastWidget';

let wrapper;
const testForecasts = {
  list: [
    {temp: {}, weather: [{}]},
    {temp: {}, weather: [{}]},
    {temp: {}, weather: [{}]},
    {temp: {}, weather: [{}]},
    {temp: {}, weather: [{}]},
    {temp: {}, weather: [{}]},
  ],
};

beforeEach(() => {
  wrapper = shallow(
    <ForecastWidget
      forecasts={testForecasts}
    />
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
