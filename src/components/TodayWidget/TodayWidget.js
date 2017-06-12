import React, { Component } from 'react';

export class TodayWidget extends Component {
  render() {
    return (
      <article className="tile is-child notification is-primary">
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
                  <p className="title">23&deg;</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="title">Cloudy</p>
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
            <div className="column is-2">Humidity</div>
            <div className="column">1</div>
          </div>
          <div className="columns">
            <div className="column is-2">Humidity</div>
            <div className="column">1</div>
          </div>
          <div className="columns">
            <div className="column is-2">Humidity</div>
            <div className="column">1</div>
          </div>
          <div className="columns">
            <div className="column is-2">Humidity</div>
            <div className="column">1</div>
          </div>
        </article>
      </article>
    );
  }
}
