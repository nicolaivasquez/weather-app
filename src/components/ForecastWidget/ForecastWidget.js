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
  forecasts = () => {
    return this.props.forecasts.list ?
      this.props.forecasts.list
        .slice(0, 5)
        .map((forecast) => ({
          icon: forecast.weather[0].icon,
          high: forecast.temp.max,
          low: forecast.temp.min,
        }))
      : [];
  }

  render() {
    return (
      <article className="tile is-child">
        <div className="content">
          <p className="title">5-day Forecast</p>
          <div className="content">
            {
              this.forecasts().map((forecast, index) =>
                <ForecastRow
                  key={index}
                  {...forecast}
                />
              )
            }
          </div>
        </div>
      </article>
    );
  }
}
