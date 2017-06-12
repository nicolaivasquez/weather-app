import React, { Component } from 'react';

import { SearchWidget } from '../SearchWidget/SearchWidget';
import { TodayWidget } from '../TodayWidget/TodayWidget';
import { GraphWidget } from '../GraphWidget/GraphWidget';
import { ForecastWidget } from '../ForecastWidget/ForecastWidget';

export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: {
        value: 2643743,
        label: 'London, GB',
      },
    }
  }

  handleCityChange = (city) => {
    this.setState({city});
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
                <TodayWidget />
              </div>
            </div>
            <div className="tile is-parent">
              <GraphWidget />
            </div>
          </div>
          <div className="tile is-parent">
            <ForecastWidget />
          </div>
        </div>
      </div>
    );
  }
}
