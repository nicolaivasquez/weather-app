import React, { Component } from 'react';

import { ForecastRow } from '../ForecastRow/ForecastRow';

const forecasts = [
  {
    key: 'cloudy',
    high: '23',
    low: '13',
  },
  {
    key: 'cloudy',
    high: '23',
    low: '13',
  },
  {
    key: 'cloudy',
    high: '23',
    low: '13',
  },
  {
    key: 'cloudy',
    high: '23',
    low: '13',
  },
  {
    key: 'cloudy',
    high: '23',
    low: '13',
  }
];

export class ForecastWidget extends Component {
  render() {
    return (
      <article className="tile is-child">
        <div className="content">
          <p className="title">5-day Forecast</p>
          <div className="content">
            {
              forecasts.map((forecast, index) =>
                <ForecastRow key={index} />
              )
            }
          </div>
        </div>
      </article>
    );
  }
}
