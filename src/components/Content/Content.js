import React, { Component } from 'react';

import { SearchWidget } from '../SearchWidget/SearchWidget';
import { TodayWidgetWithLoading } from '../TodayWidget/TodayWidget';
import { GraphWidget } from '../GraphWidget/GraphWidget';
import { ForecastWidgetWithLoading } from '../ForecastWidget/ForecastWidget';

import { getForecastWeather, getTodayWeather } from '../../data';

const defaultLoading = {
  loading: {
    today: true,
    forecasts: true,
  },
}

export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...defaultLoading,
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
      .then((forecasts) => {
        this.setState({
          forecasts,
          loading: {
            forecasts: false,
          },
        });
      });

    getTodayWeather(city.value)
      .then((today) => {
        this.setState({
          today,
          loading: {
            forecasts: false,
          },
        })
      });
  }

  handleCityChange = (city) => {
    this.setState({city});

    this.setState({
      ...defaultLoading,
    });

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
                <TodayWidgetWithLoading
                  weather={this.state.today}
                  loading={this.state.loading.today}
                />
              </div>
            </div>
            <div className="tile is-parent">
              <GraphWidget />
            </div>
          </div>
          <div className="tile is-parent">
            <ForecastWidgetWithLoading
              forecasts={this.state.forecasts}
              loading={this.state.loading.forecasts}
            />
          </div>
        </div>
      </div>
    );
  }
}
