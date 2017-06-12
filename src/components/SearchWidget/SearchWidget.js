import React, { Component } from 'react';

export class SearchWidget extends Component {
  render() {
    return (
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
    );
  }
}
