import React, { Component } from 'react';

import { ForecastRow } from '../ForecastRow/ForecastRow';
import { isLoading } from '../isLoading/isLoading';

export class ForecastWidget extends Component {
  forecasts = () => {
    console.log(this.props);
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

export const ForecastWidgetWithLoading = isLoading(ForecastWidget);
