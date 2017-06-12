import React from 'react';
import { shallow } from 'enzyme';
import { TodayWidget } from './TodayWidget';

let wrapper;
const testWeather = {
  weather: [{}]
}

beforeEach(() => {
  wrapper = shallow(
    <TodayWidget
      weather={testWeather}
    />
  );
});

describe('render', () => {
  it('should have primary class', () => {
    expect(wrapper.is('.is-primary')).toBeTruthy();
  });
});
