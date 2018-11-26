import React from 'react';
import './vehiclewidget.scss';

const SavedVehicleWidget = () => (
  <div className="widget auto-height mt40 saved-vehicle">
    <div className="widget-header left-normal">My Vehicle</div>
    <div className="widget-body" id="myVehicleList">
      <div className="search-vehicle-list">
        <strong>2011 Dodge Avenger</strong> - Express 2.4L 4cyl
        <span className="close-svl">&#10006;</span>
      </div>
      <div className="vehicle-control-button">
        <button className="button-blue-solid small">Add New Vehicle</button>

        <button className="text-anchor see-all-vehicles">
          See All Vehicles
        </button>
      </div>
    </div>
  </div>
);

export default SavedVehicleWidget;
