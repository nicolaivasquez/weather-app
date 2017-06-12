import React, { Component } from 'react';

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
            onChange={(city) => this.props.handleChange(city)}
            value={this.props.city}
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
