import React from 'react';
import { RelayContext } from '../providers';

export function withRelayContext(Component) {
  return function WrapperComponent(props) {
    return (
      <RelayContext.Consumer>
        {state => <Component {...props} context={state} />}
      </RelayContext.Consumer>
    );
  };
}
