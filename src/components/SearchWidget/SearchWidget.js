import React, { Component } from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import VirtualizedSelect from 'react-virtualized-select'

import { getCities } from '../../data';

export class SearchWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      city: {
        value: 2643743,
        label: 'London, GB',
      }
    }
  }

  loadCities = (query) => {
    return getCities(query)
      .then((response) => {
        const cities = response.data || [];

        this.setState({
          cities,
        });
        return {options: cities};
      });
  }

  render() {
    return (
      <article className="tile is-child">
        <div className="field">
          <label className="label">City</label>
          <VirtualizedSelect
            async
            loadOptions={this.loadCities}
            options={this.state.cities}
            onChange={(city) => this.setState({city})}
            value={this.state.city}
          />
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
    );
  }
}
