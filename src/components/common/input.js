import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroupIcon = ({ value, label }) => {
  return (
    <div className="form-input">
      <div className="select-text">
        <span className="meta">{label}</span>
        <span>{value}</span>
        <span className="right-arrow">&#9662;</span>
      </div>
    </div>
  );
};

TextFieldGroupIcon.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextFieldGroupIcon;
