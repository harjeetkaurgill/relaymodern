import React, { Component } from 'react';
import Sidepopup from '../../common/Sidepopup';

// Create a new context for the app
export const AppContext = React.createContext('app');

// Creates a provider Component
class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidepopup: false,
    };

    this.onOpenSidePopup = this.onOpenSidePopup.bind(this);
  }

  onOpenSidePopup() {
    this.setState({ sidepopup: true });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          onOpenSidePopup: this.onOpenSidePopup,
        }}
      >
        {this.props.children}
        <Sidepopup
          open={this.state.sidepopup}
          onOpenSidePopup={this.onOpenSidePopup}
        />
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
