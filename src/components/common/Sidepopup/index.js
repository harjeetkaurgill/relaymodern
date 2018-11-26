import React from 'react';
import './sidepopup.scss';

const SidePopup = props => {
  return (
    <section
      className="popup-container"
      style={{ display: props.open ? 'block' : 'none' }}
    >
      <div className="popup-panel-container" id="skufitmentPopup">
        <div className="panel-header">
          <div className="ph-label">Select Vehicle(s)</div>
          <div className="ph-close">
            <span>&#10006;</span>
          </div>
        </div>
        <div className="panel-content" />
      </div>
    </section>
  );
};

export default SidePopup;
