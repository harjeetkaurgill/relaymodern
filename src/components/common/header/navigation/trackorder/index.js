import React from 'react';
import TrackOrderDropDown from './trackorderdropdown';
import TrackSvg from '../../../Svg/TrackSvg';

class Trackorder extends React.Component {
  state = {
    open: false,
  };
  handleToggle = () => {
    console.log('in handle');
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <li className="track-button">
        <div className="wrap" onClick={this.handleToggle} role="presentation">
          <span className="nav-icon">
            <TrackSvg />
          </span>
        </div>
        <TrackOrderDropDown handleClose={this.handleClose} open={open} />
      </li>
    );
  }
}

export default Trackorder;
