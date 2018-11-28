import React from 'react';
import './vehiclewidget.scss';

const SavedVehicleWidget = props => (
  <div className="widget auto-height mt40 saved-vehicle">
    <div className="widget-header left-normal">My Vehicle</div>
    <div className="widget-body" id="myVehicleList">
      <div className="search-vehicle-list">
        <strong>
          <p>
            {props.data.year} {props.data.make} {props.data.model}
          </p>
        </strong>
        <p>
          {props.data.submodel} {props.data.engine}
        </p>
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
