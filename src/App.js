import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import 'weather-icons/css/weather-icons.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item" href="/">
              Weather App
            </a>
          </div>

          <div className="nav-center">
            <a className="nav-item" href="https://github.com/nicolaivasquez/weather-app">
              <span className="icon">
                <i className="fa fa-github"></i>
              </span>
            </a>
          </div>

          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </nav>
        <div className="container is-fluid">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child">
                    <div className="field">
                      <label className="label">Name</label>
                      <p className="control">
                        <input className="input" type="text" placeholder="Text input"/>
                      </p>
                    </div>
                    <div className="field has-addons">
                      <p className="control">
                        <a className="button">
                          <span>&deg;C</span>
                        </a>
                      </p>
                      <p className="control">
                        <a className="button">
                          <span>&deg;F</span>
                        </a>
                      </p>
                    </div>
                  </article>

                </div>
                <div className="tile is-parent">
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
                      <p className="columns">
                        <div className="column is-2">Humidity</div>
                        <div className="column">1</div>
                      </p>
                      <p className="columns">
                        <div className="column is-2">Humidity</div>
                        <div className="column">1</div>
                      </p>
                      <p className="columns">
                        <div className="column is-2">Humidity</div>
                        <div className="column">1</div>
                      </p>
                      <p className="columns">
                        <div className="column is-2">Humidity</div>
                        <div className="column">1</div>
                      </p>
                    </article>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child">
                  <p className="title">Graph Goes Here</p>
                  <div className="content">
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child">
                <div className="content">
                  <p className="title">5-day Forecast</p>
                  <div className="content">
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
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
