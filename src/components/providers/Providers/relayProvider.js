import React, { Component } from 'react';

// Create a new context for the app
export const RelayContext = React.createContext('app');

// Creates a provider Component
class RelayProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <RelayContext.Provider
        value={{
          environment: this.props.value.environment,
        }}
      >
        {this.props.children}
      </RelayContext.Provider>
    );
  }
}

export default RelayProvider;
