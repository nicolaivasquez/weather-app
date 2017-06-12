import React, { Component } from 'react';

import { SearchWidget } from '../SearchWidget/SearchWidget';
import { TodayWidget } from '../TodayWidget/TodayWidget';
import { GraphWidget } from '../GraphWidget/GraphWidget';
import { ForecastWidget } from '../ForecastWidget/ForecastWidget';

export class Content extends Component {
  render() {
    return (
      <div className="container is-fluid">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <SearchWidget />
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
