import React, { Component } from 'react';
import 'bulma/css/bulma.css';
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
          Content goes here
        </div>
      </div>
    );
  }
}

export default App;
