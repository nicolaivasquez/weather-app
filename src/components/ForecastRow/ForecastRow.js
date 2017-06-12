import React, { Component } from 'react';

import {
  getIcon,
  getTemperature,
} from '../../lib/weather';

export class ForecastRow extends Component {
  render() {
    return (
      <article className="media">
        <figure className="media-left">
          <img className="weather-icon" src={getIcon(this.props.icon)} />
        </figure>
        <div className="media-content">
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">High</p>
                <p className="title">{getTemperature(this.props.high)}&deg;</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Low</p>
                <p className="title">{getTemperature(this.props.low)}&deg;</p>
              </div>
            </div>
          </nav>
        </div>
      </article>
    );
  }
}
