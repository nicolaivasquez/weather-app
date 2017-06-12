import React, { Component } from 'react';

import {
  getIcon,
  getTemperature,
} from '../../lib/weather';

export class TodayWidget extends Component {
  icon = () => {
    return this.props.weather.weather ?
      getIcon(this.props.weather.weather[0].icon)
      : ''
  }

  description = () => this.props.weather.weather ? this.props.weather.weather[0].main : '';

  temperature = () => this.props.weather.main ? getTemperature(this.props.weather.main.temp) : '';

  render() {
    return (
      <article className="tile is-child notification is-primary">
        <article className="media">
          <figure className="media-left">
            <img className="weather-icon" src={this.icon()} />
          </figure>
          <div className="media-content">
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="title">{this.temperature()}&deg;</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">{this.description()}</p>
                  {
                    this.props.weather.weather &&
                    <p className="title">{this.props.weather.weather[0].description}</p>
                  }
                </div>
              </div>
            </nav>
          </div>
        </article>
        <article>
          <div className="columns">
            <div className="column is-half">
            </div>
          </div>
          <div className="columns">
            <div className="column is-2">High</div>
            {
              this.props.weather.main &&
              <div className="column">{getTemperature(this.props.weather.main.temp_max)}&deg;</div>
            }
          </div>
          <div className="columns">
            <div className="column is-2">Low</div>
            {
              this.props.weather.main &&
              <div className="column">{getTemperature(this.props.weather.main.temp_min)}&deg;</div>
            }
          </div>
          <div className="columns">
            <div className="column is-2">Humidity</div>
            {
              this.props.weather.main &&
              <div className="column">{this.props.weather.main.humidity}%</div>
            }
          </div>
          <div className="columns">
            <div className="column is-2">Pressure</div>
            {
              this.props.weather.main &&
              <div className="column">{this.props.weather.main.pressure} Pa</div>
            }
          </div>
        </article>
      </article>
    );
  }
}
