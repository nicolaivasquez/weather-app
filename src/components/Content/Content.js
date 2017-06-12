import React, { Component } from 'react';

import { SearchWidget } from '../SearchWidget/SearchWidget';
import { TodayWidget } from '../TodayWidget/TodayWidget';
import { GraphWidget } from '../GraphWidget/GraphWidget';
import { ForecastWidget } from '../ForecastWidget/ForecastWidget';

import { getForecastWeather, getTodayWeather } from '../../data';

export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: {
        value: 2643743,
        label: 'London, GB',
      },
      today: {},
      forecasts: {},
    }
  }

  componentDidMount() {
    this.setWeather(this.state.city);
  }

  setWeather = (city) => {
    getForecastWeather(city.value)
      .then((forecasts) => this.setState({forecasts}));

    getTodayWeather(city.value)
      .then((today) => this.setState({today}));
  }

  handleCityChange = (city) => {
    this.setState({city});

    this.setWeather(city);
  };

  render() {
    return (
      <div className="container is-fluid">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <SearchWidget
                  city={this.state.city}
                  handleChange={this.handleCityChange}
                />
              </div>
              <div className="tile is-parent">
                <TodayWidget
                  weather={this.state.today}
                />
              </div>
            </div>
            <div className="tile is-parent">
              <GraphWidget />
            </div>
          </div>
          <div className="tile is-parent">
            <ForecastWidget
              forecasts={this.state.forecasts}
            />
          </div>
        </div>
      </div>
    );
  }
}
