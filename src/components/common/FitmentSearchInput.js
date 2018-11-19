import React from 'react';
import PropTypes from 'prop-types';

const FitmentSearchInput = ({ value, buttonlabel, placeholder }) => {
  return (
    <div className="input-wrapper">
      <div className="fitment-input">
        <input type="text" placeholder={placeholder} value={value} />
      </div>
      <div className="fitment-input-button-container">
        <button className="button-fit-search button-vin-search">
          {buttonlabel}
        </button>
      </div>
    </div>
  );
};

FitmentSearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  buttonlabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FitmentSearchInput;
