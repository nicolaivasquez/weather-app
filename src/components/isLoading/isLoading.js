import React, { Component } from 'react';

export const isLoading = (ChildComponent) => {
  return class extends Component {
    render() {
      if (this.props.loading) {
        return (
          <div className="loader">Loading...</div>
        )
      }
      return <ChildComponent {...this.props} />
    }
  }
}
