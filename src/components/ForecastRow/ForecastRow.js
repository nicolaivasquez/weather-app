import React, { Component } from 'react';

export class ForecastRow extends Component {
  render() {
    return (
      <article className="media">
        <figure className="media-left">
          <span className="icon is-large">
            <i className="wi wi-day-lightning"></i>
          </span>
        </figure>
        <div className="media-content">
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">High</p>
                <p className="title">23&deg;</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Low</p>
                <p className="title">13&deg;</p>
              </div>
            </div>
          </nav>
        </div>
      </article>
    );
  }
}
