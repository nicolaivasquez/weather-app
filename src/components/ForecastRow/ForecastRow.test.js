import React from 'react';
import { shallow } from 'enzyme';
import { ForecastRow } from './ForecastRow';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <ForecastRow />
  );
});

describe('render', () => {
  it('should be a media element', () => {
    expect(wrapper.is('.media')).toBeTruthy();
  });
});
