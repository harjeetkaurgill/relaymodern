import React from 'react';
import ClickAwayListener from '../../../ClickAwayListener';

const TrackOrderDropdown = props => (
  <ClickAwayListener onClickAway={props.handleClose}>
    <div
      className="dropdown-menu"
      style={{ display: props.open ? 'block' : 'none' }}
    >
      <div className="track-text">
        <p>Please enter tracking number.</p>
        <span>( Tracking number has been sent to you in the email.)</span>
      </div>
      <form>
        <div className="track-input">
          <input type="text" />
        </div>
        <div className="track-button">
          <button type="submit" className="button-blue-solid">
            Track Order
          </button>
        </div>
      </form>
    </div>
  </ClickAwayListener>
);

export default TrackOrderDropdown;
